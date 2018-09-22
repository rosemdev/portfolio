<template>
    <div class="test">
        <h1>{{ fields.label }}</h1>
        <h1>{{ fields.URL }}</h1>
        <!--<prismic-image :field="fields.logo"/>-->
        <!--<prismic-rich-text :field="fields.richContent"/>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                fields: {
                    title: null,
                    logo: null,
                    richContent: null,
                    label: null,
                    URL: null
                },

                menuItems: [],
            };
        },
        methods: {
            getContent () {
                this.$prismic.client.getSingle('home')
                    .then((document) => {
                        this.fields.title = document.data.title;
                        this.fields.logo = document.data.logo;
                        this.fields.richContent = document.data.rich_content;
                    })
            },

            getmenuItem() {
                this.$prismic.client.query(
                    this.$prismic.Predicates.at('document.type', 'menuitem'),
                ).then((response) => {
                const documents = response.results;
                    this.menuItems = documents;

                    // console.log(this.menuItems);
                })
            }
        },
        created () {
            this.getContent();
            this.getmenuItem();
            console.log(this.$router);
        }
    }
</script>