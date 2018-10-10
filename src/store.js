import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        article: {},
        author: {},
        cards: [],
        loading: false
    },

    mutations: {
        setBlogCards(state, cards) {
            state.cards = cards;
        },
        setArticle(state, article) {
            state.article = article;
        },
        setAuthor(state, author) {
            state.author = author
        }
    },

    actions: {
        getBlogCards({commit, state}) {
            state.loading = true;

            return Vue.prototype.$prismic.client.query(
                Vue.prototype.$prismic.Predicates.at('document.type', 'article'),
            ).then(response => {
                state.loading = false;
                console.log(response);
                const cards = response.results.map(({uid, data, first_publication_date}) => {
                    return {
                        slug: uid,
                        title: data.title[0].text,
                        description: data.description[0].text,
                        publicationDate: first_publication_date,
                        background: data.background,
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
                        title: response.data.title[0].text
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
                }).catch((error) => {
                    state.loading = false;
                    throw error

                });
        }
    },

    getters: {
        sortedCards: (state) => {
            return state.cards.sort(function (a, b) {
                return new Date(b.publicationDate) - new Date(a.publicationDate);
            });

        }
    }
});