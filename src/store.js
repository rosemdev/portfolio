import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        article: {},
        author: {},
        cards: [],
        relatedArticles: [],
        loading: false,
        totalPages: "",
        totalCards: ""
    },

    mutations: {
        setBlogCards(state, cards) {
            state.cards = cards;
        },
        setArticle(state, article) {
            state.article = article;
        },

        setRelatedArticles(state, relatedArticles) {
            state.relatedArticles = relatedArticles;
        },
        setAuthor(state, author) {
            state.author = author
        },

        isLoading(state, isLoading) {
            state.loading = isLoading;
        },

        totalCards(state, totalCards) {
            state.totalCards = totalCards;
        },
        totalPages(state, totalPages) {
            state.totalPages = totalPages;
        }
    },

    actions: {
        getBlogCards({commit,state}, {perPage, currentPage}) {
            commit('isLoading', true);
            return Vue.prototype.$prismic.client.query(
                Vue.prototype.$prismic.Predicates.at('document.type', 'article'),
                {pageSize: perPage, page: currentPage, orderings : '[document.first_publication_date desc]'},
            ).then(response => {

                commit('isLoading', false);
                commit('totalCards', response.total_results_size);
                commit('totalPages', response.total_pages);

                console.log(response);
                const cards = response.results.map(({uid, data, first_publication_date}) => {
                    return {
                        slug: uid,
                        title: data.title[0].text,
                        description: data.description[0].text || null,
                        publicationDate: first_publication_date,
                        background: data.background,
                    }
                });

                console.log('currentPage', currentPage, "totalPages ", state.totalPages, 'new');
                    commit('setBlogCards', cards);

                console.log('setBlogCards', cards);
            })
        },

        getArticle({commit, state}, slug) {
            commit('isLoading', true);
            return Vue.prototype.$prismic.client.getByUID('article', slug)
                .then((response) => {
                    commit('isLoading', false);
                    console.log('article newQuery response', response);
                    const article = {
                        authorId: response.data.article_author.id || null,
                        prologue: response.data.prologue.length > 0 ? response.data.prologue[0].text : null,
                        content: response.data.content || null,
                        publicationDate: response.first_publication_date,
                        tags: response.tags || null,
                        slug: response.uid,
                        title: response.data.title[0].text,
                        background: response.data.background,
                        relatedArticlesIds: response.data.related_articles.filter(article => {
                            return article.link.uid !== undefined;

                        }).map((article) => {
                            return article.link.uid
                        })

                    };
                    commit('setArticle', article);
                    console.log('article newQuery', article);

                    return article
                }).then((article) => {
                    commit('isLoading', true);
                    if (article.authorId !== null) {
                        return Vue.prototype.$prismic.client.getByID(article.authorId)
                            .then((response) => {
                                commit('setAuthor', {
                                    name: response.data.name[0].text,
                                    description: response.data.about[0].text,
                                    avatar: response.data.avatar,
                                    links: response.data.links.map(link => {
                                        return {
                                            name: link.title[0].text,
                                            link: link.link.url
                                        }
                                    })
                                });
                                commit('isLoading', false);
                            })
                    }
                }).then(() => {
                        commit('isLoading', true);
                        if (state.article.relatedArticlesIds.length > 0) {
                            return Vue.prototype.$prismic.client.query(
                                Vue.prototype.$prismic.Predicates.in('my.article.uid', state.article.relatedArticlesIds),
                                {fetchLinks: ['author.name', 'author.avatar']}
                            ).then((response) => {
                                commit('isLoading', false);
                                const relatedArticlesData = response.results.slice(0, 3).map(({data, uid, first_publication_date}) => {

                                    return {
                                        publicationDate: first_publication_date,
                                        title: data.title[0].text,
                                        background: data.background,
                                        slug: uid,
                                        authorName: data.article_author.data.name[0].text || null,
                                        authorAvatar: data.article_author.data.avatar || null
                                    }

                                });
                                commit('setRelatedArticles', relatedArticlesData);

                            });
                        } else {
                            commit('isLoading', false);
                            commit('setRelatedArticles', []);
                        }
                    }
                ).catch((error) => {
                    commit('isLoading', false);
                    console.error(error);
                    throw error

                });
        },
    },
});