<template>
    <div class="resume-aside">
        <rosem-avatar>
            <a href="https://www.linkedin.com/in/romanna-semenyshyn/" target="_blank">
                <img src="../assets/images/me/rosem2.jpg">
            </a>
        </rosem-avatar>
        <div class="skills">
            <img src="../assets/images/icons/body-building.png">
            <p class="heading">Skills</p>
            <p>Please also find this detailed info in resume and in the Linkedin.</p>
            <div class="skill-box">
                <ul>
                    <li><img src="../assets/images/icons/skills/html5.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/css3.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/less.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/PostCSS.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/js.jpg" alt=""></li>
                    <li><img src="../assets/images/icons/skills/ES6.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/Vue.js.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/git.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/sql.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/linux.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/photoshop.png" alt=""></li>
                    <li><img src="../assets/images/icons/skills/adobe-illustrator.png" alt=""></li>
                </ul>
            </div>
            <div class="additional-info">
                <p class="heading">Additionally:</p>
                <ul>
                    <li>Experience with RESTful Services and APIs</li>
                    <li>Responsive and Mobile Design</li>
                    <li>Cross-Browser Development</li>
                    <li>Browser Developer Tools</li>
                    <li>Testing and Debugging</li>
                    <li>Git and Version Control Systems</li>
                    <li>Problem Solving Skills</li>
                    <li>A knack for teamwork</li>
                    <li>Content Management Systems and E-commerce Platforms (as a QA)</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import RosemAvatar from "../components/Avatar"

    export default {
        name: "Aside",

        data() {
            return {
                isTouch: false,

            }
        },

        components: {
            RosemAvatar
        },

        methods: {
            fixSidebar() {
                if (this.isDesktop()) {

                    let pageHeight = Math.max(
                        document.body.scrollHeight, document.documentElement.scrollHeight,
                        document.body.offsetHeight, document.documentElement.offsetHeight,
                        document.body.clientHeight, document.documentElement.clientHeight
                        ),
                        distance = 250,
                        footerHeight = document.querySelector('footer').getBoundingClientRect().height,
                        sidebarHeight = this.$el.getBoundingClientRect().height;

                    if (window.pageYOffset + this.$el.offsetHeight + distance > pageHeight - footerHeight) {
                        this.$el.style.position = "absolute";
                        this.$el.style.marginTop = (pageHeight - footerHeight - sidebarHeight - distance) + 'px';

                    } else {
                        this.$el.style.position = "";
                        this.$el.style.marginTop = '';
                    }
                }

            },

            isDesktop() {
                return window.matchMedia("(min-width: 769px)").matches;
            }
        },

        created() {
            this.$nextTick(() => {
                document.addEventListener('scroll', this.fixSidebar.bind(this));
            });

        },

        destroyed() {
            document.removeEventListener('scroll', this.fixSidebar.bind(this));
        }


    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .resume-aside {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-between;
        background-color: @mainColor;
        color: white;
        position: static;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 25px 10px;

        .skills {
            margin-top: 25px;

            img {
                width: 35px;
            }

            .heading {
                font-size: 25px;
                text-transform: uppercase;
                font-weight: 700;
            }

            .skill-box {
                ul {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-wrap: wrap;

                    li {
                        display: block;

                        img {
                            width: 100px;
                        }
                    }

                }
            }

            .additional-info {
                ul {
                    list-style: inside;
                    text-align: left;
                    font-size: 17px;
                    padding-left: 35px;

                    li {
                        margin: 6px 0;
                    }
                }
            }

        }


    }

    .responsive(@desktop, { .resume-aside {
        position: fixed;
        width: 20%;
    } });

</style>