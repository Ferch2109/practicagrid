<template lang="pug">
    <div>
    .ejerciciosunodostres.w-100.center.tc
        p {{comentario.primero}}
        #gridSpringboard.center.pa2-l.pa1
            div.img(v-for="img in imagenes")
                | <div v-bind:style="'background-image: url('+imgRequest(img.name)+')'"></div>


    .ejerciciocuatro.w-100.center.tc
        p {{comentario.ultimo}}
        #gridSpringboardp.center.pa2-l.pa1
            div.texto(v-for="index in lmax")
                | <p :id=index>{{ loremArray[aleatorio(min, max)].msg}}</p>
    </div>

</template>

<script>
    import images from "@/assets/data/redes.json";
    import dataLorem from "@/assets/data/lorem.json";

    export default {
        name: "practica",
        data() {
            return {
                min: "",
                max: "",
                lmax: "",
                redesInfo: "",
                imagenes: "",
                dataL: "",
                loremArray: "",
                comentario: {
                    "primero":"Estuve buscando e intentando de todo para mostrar las imagenes pero nada funcionó",
                    "ultimo":"Preferí hacerlo con el texto para que se viera"
                    }
            };
        },
        methods: {
            imgRequest: function(name){
                return '../assets/images/widgets/'+name;
            },
            aleatorio: function(a, b) {
                return Math.round(Math.random() * (b - a) + parseInt(a));
            },
            loadJson: function() {
                this.redesInfo = images;
                this.dataL = dataLorem;

                console.log("dataL", this.dataL);
                console.log("settings", this.dataL["settings"][0]);
                console.log("lorem", this.dataL["loremArray"]);

                console.log("redesInfo", this.redesInfo);
                console.log("settings", this.redesInfo["settings"][0]);
                console.log("images", this.redesInfo["images"]);
            },
            setSettings: function() {
                this.settings = this.redesInfo["settings"][0];
                this.min = this.redesInfo["settings"][0]["min"];
                this.max = this.redesInfo["settings"][0]["max"];
                this.lmax = this.redesInfo["settings"][0]["lmax"];
            },
            setArray: function() {
                this.imagenes = this.redesInfo["images"];
                console.log("imagenes ", this.imagenes);

                this.loremArray = this.dataL["loremArray"];
                console.log("loremArray ", this.loremArray);
            }
        },
        mounted() {
            this.loadJson();
            this.setSettings();
            this.setArray();
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    //styles
    .ejerciciocuatro{
        margin-top: 50px;
    }

    .ejerciciosunodostres, .ejerciciocuatro {
        border: 1px solid $orange;
        .unamGoldColor.bold {
            font-weight: 900;
        }
        .unamGoldColor {
            color: $gold;
            &.bold {
                font-weight: 600;
            }
        }
        #gridSpringboard, #gridSpringboardp {
            background-image: url("../assets/images/wallpaper_ios.jpg");
            display: grid;
            width: 98%;
            border: 1px solid $blue;
            overflow-wrap: break-word;
            justify-content: center;
        }
        div{
            border: 1px solid $red;
        }
    }

    /* media queries para pantallas large*/
    @media #{$breakpoint-large} {
        .ejerciciocuatro {
            background: cadetblue;
        }
        #gridSpringboardp {
            grid-template-columns: [col] 24% [col] 24% [col] 24% [col] 24%;
            grid-template-rows: [row] auto [row] auto [row];
            grid-gap: 1.3%;
            grid-row-gap: 2%;
        }
    }

    #1{
        grid-column: col /span 2;
        grid-row: row 1;
    }
    #2{
        grid-column: col 3 /span 2;
        grid-row: row 1;
    }


    /* media queries para pantallas large*/
    @media #{$breakpoint-large} {
        .ejerciciosunodostres {
            background: cadetblue;
        }
        #gridSpringboard {
            grid-template-columns: 24% 24% 24% 24%;
            grid-template-rows: 32% 32% 32%;
            grid-gap: 1.3%;
            grid-row-gap: 2%;
        }
    }
    @media #{$breakpoint-medium} {
        .ejerciciosunodostres {
            background: cadetblue;
        }
        #gridSpringboard {
            grid-template-columns: 32% 32% 32%;
            grid-template-rows: 32% 32% 32% 32%;
            grid-gap: 1.3%;
            grid-row-gap: 2%;
        }
    }
    @media (max-width: 680px) {
        .ejerciciosunodostres {
            background: cadetblue;
        }
        #gridSpringboard {
            grid-template-columns: 45% 45%;
            grid-template-rows: 32% 32% 32% 32%;
            grid-gap: 1.3%;
            grid-row-gap: 2%;
        }
    }
    @media (max-width: 380px) {
        .ejerciciosunodostres {
            background: cadetblue;
        }
        #gridSpringboard {
            grid-template-columns: 80%;
            grid-template-rows: 32% 32% 32% 32%;
            grid-gap: 1.3%;
            grid-row-gap: 2%;
        }
    }
</style>
