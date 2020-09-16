<template>
    <div id="music">
            <h2>音乐播放器</h2>
            <input type="text" @keyup.enter="searchMusic" v-model="Keywords">
            <button @click="searchMusic">搜索</button>
            <br>
            <br>
            <audio :src="musicUrl" controls autoplay></audio>
            <br>
            <img :src="musicImg" width="200px">
            <div id="Box">
                <div id = "searchRes">
                    <h2>搜索结果：</h2>
                    <ul v-for="item in musicArr" :key="item">
                        <li><button @click="getPlayUrl(item.id)">播放</button>{{item.name+"————"+item.artists[0].name}}</li>
                    </ul>
                </div>
                <div id="comments">
                    <h2>热门评论：</h2>
                    <ul v-for="item in musicComments" :key="item">
                        <li>{{item.user.nickname+"："+item.content}}</li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
        return {
            Keywords:"",
            musicArr:[],
            musicUrl:"",
            musicImg:"",
            musicComments:[],
        }
    },
    watch:{},
    computed:{},
    methods:{
        searchMusic(){
            var _this = this
            _this.$axios.get("http://localhost:3000/search?keywords="+_this.Keywords)
            .then(function (response){
                console.log(response.data.result);
                _this.musicArr = response.data.result.songs;
            })
        },

        getPlayUrl(id){
            var _this = this
            _this.$axios.get("http://localhost:3000/song/url?id="+id)
            .then(function (response){
                _this.musicUrl = response.data.data[0].url;
            });
            _this.$axios.get("http://localhost:3000/song/detail?ids="+id)
            .then(function(response){
                _this.musicImg = response.data.songs[0].al.picUrl;
            });
            _this.$axios.get("http://localhost:3000/comment/hot?type=0&id="+id)
            .then(function(response){
                console.log(response.data.hotComments[0]);
                _this.musicComments = response.data.hotComments;
            })
        },
    },
    created(){},
    mounted(){}
}
</script>
<style scoped lang="stylus">
common_flex(){
    display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */  
    display: -moz-box; /* Firefox 17- */  
    display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */  
    display: -moz-flex; /* Firefox 18+ */  
    display: -ms-flexbox; /* IE 10 */  
    display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */  
}
#Box{
    position: relative;
    common_flex();
    justify-content: space-between;
}
#searchRes,#comments{
    width: 900px;
}
</style>