<template>
    <div>
        <Header />
        <b-container fluid>
            <b-row>
                <b-col cols="3">
                    <Sidebar />
                </b-col>
                <b-col cols="9">
                    <div class="publications">
                        <Post username="Francisco Mestizo" date="10 Nov 2022" title="Riverdale" review="Me gustó" category="Música" rating="8" />
                        <Post username="Adrián Faz" date="10 Nov 2022" title="One piece" review="ES la mejor serie del mundo, me cambi la vida" category="Series" rating="10" />
                        <Post username="Cristina Hernández" date="10 Nov 2022" title="Andor" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices neque et augue feugiat, mollis semper diam aliquam. Praesent vulputate ex sit amet tellus commodo condimentum. Duis tincidunt iaculis ligula, quis dignissim est mollis vitae. Mauris venenatis nulla vitae mauris fermentum accumsan. Etiam varius ullamcorper dolor vel tempus. Suspendisse eu est turpis. Phasellus lorem diam, malesuada id faucibus sed, commodo at libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dapibus et libero et sagittis. Sed euismod maximus risus, eget semper purus eleifend vitae.
Ut non fringilla purus. Sed ornare imperdiet urna, at vestibulum arcu aliquet in. Fusce vehicula viverra diam, vitae ullamcorper arcu bibendum semper. In dapibus non elit a ultrices. Nunc odio nisi, fermentum et tincidunt quis, semper rhoncus purus. Sed sit amet purus justo. Vivamus scelerisque felis eu justo fringilla interdum. Curabitur convallis, urna sit amet accumsan suscipit, turpis mauris convallis nunc, et volutpat risus lectus at lectus. Duis vehicula felis et augue mattis tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent rhoncus, mi vitae iaculis lacinia, sem justo mattis nibh, a placerat nisl tortor cursus neque. Vestibulum sagittis laoreet massa id vestibulum. Maecenas sed." category="Música" rating="8" />
                        <Post username="Diana Laura" date="10 Nov 2022" title="Harry potter" review="Me gustó" category="Música" rating="8" />
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Post from './Post.vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default {
    name: 'Home',
    components: {
        Post, Sidebar, Header
    }
}

</script>


<style scoped>
.publications{
    padding-bottom: 50px;
}
</style>