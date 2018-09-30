<template>
    <div class="main-content">
        <div class="intro">
            <rosem-description-block subtitle="me" title="Romanna Semenenyshyn">
                <template slot="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Aliquid beatae consectetur dolore doloremque exercitationem facilis
                    iure iusto mollitia natus omnis.
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
                <rosem-description-block subtitle="work" title="smile">
                    <template slot="description">
                        <span class="position">QA Engineer</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat. Lorem ipsum dolor
                            sit amet,
                            consectetur adipisicing elit. Aliquid beatae consectetur.</p>
                    </template>
                    <div slot="additional-info">
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </rosem-description-block>
            </div>
            <div class="life-cycle">
                <rosem-history-line :begin-year="2016" :end-year="2018">
                    <template slot="beginData">Sep. 01</template>
                    <template slot="endData">Jen 25</template>
                </rosem-history-line>
                <rosem-description-block subtitle="education" title="Ternopil National Economic University">
                    <template slot="description">
                        <span class="position">Master degree</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat. Lorem ipsum dolor
                            sit amet,
                            consectetur adipisicing elit. Aliquid beatae consectetur.</p>
                    </template>
                    <div slot="additional-info">
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </rosem-description-block>
            </div>
            <div class="life-cycle">
                <rosem-history-line :begin-year="2012" :end-year="2016">
                    <template slot="beginData">Sep. 01</template>
                    <template slot="endData">Jun. 25</template>
                </rosem-history-line>
                <rosem-description-block subtitle="education" title="Ternopil National Economic University">
                    <template slot="description">
                        <span class="position">Bachelor degree</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat. Lorem ipsum dolor
                            sit amet,
                            consectetur adipisicing elit. Aliquid beatae consectetur.</p>
                    </template>
                    <div slot="additional-info">
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </rosem-description-block>
            </div>
            <div class="get-resume">
                <rosem-button
                        href="../../data/CV_Romanna_Semenyshyn.docx.odt"
                        download="Romanna_Semenyshyn_resume"
                        class="dark"
                >get resume</rosem-button>
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

    .intro {
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
            color: @mainColor;

            & /deep/ .description-block {
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
                }
            }
        }
    }
</style>