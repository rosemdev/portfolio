import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        article: {},
        author: {},
        cards: [],
        relatedArticles: [],
        relatedAuthorsData: [],
        loading: false
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

        setRelatedAuthorsData(state, authors) {
            state.relatedAuthorsData = authors
        }
    },

    actions: {
        getBlogCards({commit, state}) {
            state.loading = true;

            return Vue.prototype.$prismic.client.query(
                Vue.prototype.$prismic.Predicates.at('document.type', 'article')
            ).then(response => {
                state.loading = false;
                console.log(response);
                const cards = response.results.map(({uid, data, first_publication_date}) => {
                    return {
                        slug: uid,
                        title: data.title[0].text,
                        description: data.description[0].text,
                        publicationDate: first_publication_date,
                        background: data.background
                    }
                });
                commit('setBlogCards', cards);
            })
        },

        getArticle({commit, state}, slug) {
            state.loading = true;

            return Vue.prototype.$prismic.client.getByUID('article', slug)
                .then((response) => {
                    console.log(response);
                    const article = {
                        authorId: response.data.article_author.id,
                        prologue: response.data.prologue[0].text,
                        content: response.data.content,
                        publicationDate: response.first_publication_date,
                        tags: response.tags,
                        slug: response.uid,
                        title: response.data.title[0].text,
                        background: response.data.background,
                        relatedArticles: response.data.related_articles.filter(article => {
                            return article.link.uid !== undefined;

                        }).map((article) => {
                            return article.link.uid
                        })
                    };
                    commit('setArticle', article);

                    return article
                }).then((article) => {
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
                            state.loading = false;
                        })
                }).then(() => {
                        if (state.article.relatedArticles.length > 0) {
                            return Vue.prototype.$prismic.client.query(
                                Vue.prototype.$prismic.Predicates.in('my.article.uid', state.article.relatedArticles),
                            ).then((response) => {
                                console.log(response);
                                const related = response.results.slice(0, 3).map(({data, uid, first_publication_date}) => {

                                    return {
                                        authorId: data.article_author.id,
                                        publicationDate: first_publication_date,
                                        title: data.title[0].text,
                                        background: data.background,
                                        slug: uid,
                                    }

                                });

                                commit('setRelatedArticles', related);
                                return related;
                            });
                        }
                    }
                )
                .then(related => {
                    if (related !== undefined) {
                        let relAuthorData = [],
                            idsArr = related.map(article => {
                                if (article.authorId !== undefined) {
                                    return article.authorId
                                }
                            });

                        return Vue.prototype.$prismic.client.query(
                            Vue.prototype.$prismic.Predicates.any('document.id', idsArr),
                        ).then((response) => {
                            const relatedAuthors = response.results.map((item) => {
                                return {
                                    id: item.id,
                                    name: item.data.name[0].text,
                                    avatar: item.data.avatar,

                                }
                            });
                            related.forEach((article) => {
                                for (let i = 0; i < relatedAuthors.length; i++) {
                                    if (article.authorId === relatedAuthors[i].id) {
                                        relAuthorData.push({
                                            authorName: relatedAuthors[i].name,
                                            authorAvatar: relatedAuthors[i].avatar
                                        });
                                    }
                                }

                            });
                            commit('setRelatedAuthorsData', relAuthorData);
                        });
                    }
                })
                .catch((error) => {
                    state.loading = false;
                    console.error(error);
                    throw error

                });
        },
    },

    getters: {
        sortedCards: (state) => {
            return state.cards.sort(function (a, b) {
                return new Date(b.publicationDate) - new Date(a.publicationDate);
            });

        },
    }
});