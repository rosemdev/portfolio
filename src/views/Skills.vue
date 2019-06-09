<template>
    <div class="skills">
        <div class="main-content">
            <div class="introduction">
                <rosem-description-block subtitle="me" title="Romanna Semenenyshyn" class="left-text">
                    <template slot="description">
                        Nice to e-meet you guys here, on my site. Please get awareness with a big part of my
                        life, but I have to admit this page isn't formal and so rigorous I just take this opportunity to
                        share my thoughts about different spheres of study and work. So my name is Romanna, but I prefer
                        a more friendly name - just Roma. So if you are interested please keep read this. If you have
                        question you can always write an email or make a call. Or if you have some proposals for me I
                        would
                        greatly appreciate your kindly on this.
                    </template>
                    <div slot="additional-info">
                        <span class="number">phone: <a href="tel:+380957277490">+38(095) 72 77 490</a></span>
                        <div>
                            <rosem-button to="/contact">email me</rosem-button>
                        </div>
                    </div>
                </rosem-description-block>
                <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
            </div>
            <div class="resume">
                <div class="life-cycle">
                    <rosem-history-line :begin-year="2016">
                        <template slot="beginData">Sep. 29</template>
                        <template slot="endData">Present</template>
                    </rosem-history-line>
                    <rosem-description-block subtitle="work" title="SMILE" class="left-text">
                        <template slot="description">
                            <span class="position">QA Engineer</span>
                            <p>I work as an engineer for quality assurance for almost 3 years. I love my work so much,
                                but at the same time, progress is needed. And I found it interesting to know deeper how
                                it works behind the scene. I have obtained a basic knowledge in the university but it's
                                a so little piece in this world of programming. So I started from the HTML and CSS. The
                                further the more interesting. JavaScript became my first strong language (despite on a
                                couple of lessons of C++ in the first curses of the university). You may ask "why
                                front-end" - my answer will be - it's exciting, and you always can see the result on the
                                browser. Moreover - all people over the world could see what you made, isn't pleasure? I
                                believe it is. Please find below a list of duties that I do every day.</p>
                        </template>
                        <div slot="additional-info">
                            <ul>
                                <li>Functional testing, testing related to changes, cross-browser testing, usability
                                    testing, regression testing;
                                </li>
                                <li>Experience in testing CRM and web-sites based on CMS Magento 1, Magento 2, typo3,
                                    Drupal,
                                    Jahia etc.
                                </li>
                                <li> Creating test cases, checklists, bug reports, verification and maintenance;</li>
                                <li>Writing of user’s manual;</li>
                                <li>Work with the development team to continuously improve application;</li>
                                <li>Work with bug tracking system Jira, Redmine;</li>
                                <li>Also, have a practical background with graphical editors: analyze, processing and
                                    editing of mockups, raster and vector images, SVG icons;
                                </li>
                            </ul>
                        </div>
                    </rosem-description-block>
                </div>
                <div class="life-cycle">
                    <rosem-history-line :begin-year="2016" :end-year="2018">
                        <template slot="beginData">Sep. 01</template>
                        <template slot="endData">Jen 25</template>
                    </rosem-history-line>
                    <rosem-description-block subtitle="education" title="Ternopil National Economic University"
                                             class="left-text">
                        <template slot="description">
                            <span class="position">Master degree</span>
                            <p>My master degree is about project management. To be honest I obtained the real conception
                                of project management on the real tasks. There is no better thing than to see it and try
                                by myself. On my working project, I have an opportunity to try myself in this area, to
                                speak with colleges how to do something, make decisions, taking into account the risks
                                and transfer all that stuff to the customer - it's a specific science. So please find
                                below a list of my skills and knowledge which are acquired on the study and at the work:
                            </p>
                        </template>
                        <div slot="additional-info">
                            <ul>
                                <li>Planning and organizations of project</li>
                                <li>Quality managing and standards</li>
                                <li>Management of human resources on the project</li>
                                <li>Control of project execution</li>
                                <li>Risk management</li>
                                <li>The methodologies of project management. Flexible methodologies</li>
                            </ul>
                        </div>
                    </rosem-description-block>
                </div>
                <div class="life-cycle">
                    <rosem-history-line :begin-year="2012" :end-year="2016">
                        <template slot="beginData">Sep. 01</template>
                        <template slot="endData">Jun. 25</template>
                    </rosem-history-line>
                    <rosem-description-block subtitle="education" title="Ternopil National Economic University"
                                             class="left-text">
                        <template slot="description">
                            <span class="position">Bachelor degree</span>
                            <p>There are a lot of topics we learned in the university, but only now I understand that
                                was foundations and some of the technologies are very old for now. Anyway, it was a
                                great experience to cognize something new after school and become a person who heard
                                about all things related to IT and could understand the essence. Below you can find a
                                list of some topic I had a chance to learn:</p>
                        </template>
                        <div slot="additional-info">
                            <ul>
                                <li>Mathematical analysis</li>
                                <li>Web technologies and Web design</li>
                                <li>Computer science</li>
                                <li>The basic of C++</li>
                                <li>The interaction between human and computer</li>
                                <li>System analysis</li>
                                <li>Intellectual Property</li>
                                <li>Numerical methods and programming</li>
                                <li>System modeling</li>
                                <li>The technologies of data protection</li>
                                <li>Method and systems of the Artificial Intelligence</li>
                                <li>Computer networks</li>
                                <li>Information systems in the economic</li>
                                <li>Management of the IT projects</li>
                                <li>High performance computing</li>
                            </ul>
                        </div>
                    </rosem-description-block>
                </div>
                <div class="get-resume">
                    <rosem-button
                            href="../../data/CV_Romanna_Semenyshyn.docx.odt"
                            download="Romanna_Semenyshyn_resume"
                            class="dark"
                    >get resume
                    </rosem-button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import RosemDescriptionBlock from "../components/DescriptionBlock"
    import RosemSocialBlock from "../components/SocialBlock"
    import RosemButton from "../ui-components/Button"
    import RosemHistoryLine from "../components/HistoryLine"
    import {socialLinks} from "../data/data"


    export default {
        name: "Skills",
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                socialLinks,
            }
        },

        components: {
            RosemDescriptionBlock,
            RosemSocialBlock,
            RosemHistoryLine,
            RosemButton,
        },

        methods: {}
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .skills {
        background-color: white;

        .introduction {
            .number {
                color: @mainColor;

                a {
                    color: @mainColor;
                }
            }

            .button {
                margin-top: 25px;

                a {
                    color: white;
                }
            }
        }

        .resume {
            .life-cycle {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                color: @mainColor;

                & .description-block {
                    h2 {
                        text-transform: uppercase;
                        font-size: 25px;

                        .responsive(@tablet, {
                            h2 {
                                font-size: 30px;
                            }
                        })
                    }

                    .position {
                        font-size: 25px;
                        font-weight: 500;
                    }

                    ul {
                        list-style: inside;
                        max-width: 700px;
                        font-size: 17px;
                        padding-left: 35px;
                    }
                }
            }
        }
    }

    .responsive(@tablet, {
        .skills {
            .resume {
                .life-cycle {
                    flex-direction: row;

                    .history {
                        width: 20px;
                    }
                }
            }
        }
    });
</style>