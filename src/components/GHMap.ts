import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator'
import esriLoader from 'esri-loader'
import esri from "esri";
import { Autocomplete ,Message} from 'element-ui'

Vue.use(Autocomplete);

// @Component
// ({
//     components: {//子组件声明
//         // "search": search,
//     }
// })
@Component
export default class GHMap extends Vue {
    mapView: any
    layer: Object = {}
    mapPoint: Object = { x: '', y: '' }

    mounted() {
        this.$nextTick(() => {
            esriLoader.dojoRequire(["esri/Map", "esri/views/MapView", "esri/layers/MapImageLayer"], (Map, MapView, MapImageLayer, SceneView, Search) => {
                this.layer = new MapImageLayer({ url: "http://192.168.12.25:6080/arcgis/rest/services/bigData/Img2014/MapServer" });
                let mapView = new MapView({
                    container: "viewDiv",
                    map: new Map({ layers: [this.layer] }),
                });
                mapView.ui.remove(["attribution", "zoom"]);
                this.mapView = mapView;
                mapView.on('pointer-move', (evt) => {
                    this.mapPoint = mapView.toMap({ x: evt.x, y: evt.y });
                })
            });
        })
    }
}