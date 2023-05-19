
<template>
    <div>
        <h1>Wikipedia Page: {{ pageTitle }}</h1>
        <div v-html="pageContent"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pageTitle: '',
            pageContent: ''
        };
    },
    mounted() {
        const endpoint =
            '/api/w/api.php?action=parse&page=Template:IPhone_models_minimal&prop=text&format=json';

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.pageTitle = data.parse.title;
                this.pageContent = data.parse.text['*'];
            })
            .catch(error => console.error(error));

        console.log(this.pageTitle)
    }
};
</script>
  