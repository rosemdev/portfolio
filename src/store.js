import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "title from vuex",
        article: {},
        author: {},
        loading: false
    },

    mutations: {
        setArticle(state, article) {
            state.article = article;
        },
        setAuthor(state, author) {
            state.author = author
        }
    },

    actions: {
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
                            console.log(response);
                            commit('setAuthor', {
                                name: response.data.name[0].text,
                                description: response.data.about[0].text,
                                avatar: response.data.avatar,
                                links: response.data.links.map(link => {
                                    return link.url
                                })
                            });
                            // state.loading = false;
                        })
                }).catch((error) => {
                    state.loading = false;
                    throw error

                });
        }
    }
});