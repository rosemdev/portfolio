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
                        <rosem-button><span>
                            <a href="mailto:romasemenyshyn@gmail.com">email me </a></span>
                        </rosem-button>
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
                <div class="info">
                    <p><small>work</small></p>
                    <p class="place">smile</p>
                    <p class="position">QA Engineer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum id placeat quidem. Eos,
                        illo.</p>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
            <div class="life-cycle">
                <rosem-history-line :begin-year="2016" :end-year="2018">
                    <template slot="beginData">Sep. 01</template>
                    <template slot="endData">Jen 25</template>
                </rosem-history-line>
                <div class="info">
                    <p><small>Education</small></p>
                    <p class="place">Ternopil National Economic Universe</p>
                    <p class="position">Project Management, Master degree</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum id placeat quidem. Eos,
                        illo.</p>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>
            <div class="life-cycle">
                <rosem-history-line :begin-year="2012" :end-year="2016">
                    <template slot="beginData">Sep. 01</template>
                    <template slot="endData">Jun. 25</template>
                </rosem-history-line>
                <div class="info">
                    <p><small>Education</small></p>
                    <p class="place">Ternopil National Economic Universe</p>
                    <p class="position">Computer Science, Bachelor degree</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum id placeat quidem. Eos,
                        illo.</p>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
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

            .info {
               text-align: left;

                p.place {
                    font-weight: 700;
                    font-size: 25px;
                    text-align: left;
                    text-transform: uppercase;
                }

                .position {
                    font-size: 20px;
                    font-weight: 500;
                    text-transform: none;
                }

                ul {
                    list-style: inside;
                }
            }
        }
    }
</style>