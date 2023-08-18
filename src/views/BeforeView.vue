<template>
  <div class="post">
    <h1>DEMO POST BEFORE</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
function getPost(id, cb) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((json) => {
      cb(null, json);
    })
    .catch((error) => {
      cb(error, null);
    });
}

export default {
  data() {
    return {
      post: null,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    setTimeout(() => {
      console.log(from);
      next((vm) => {
        getPost(to.params.id, (err, post) => {
          // `setData` is a method defined below
          vm.setData(err, post);
        });
      });
    }, 3000); // simulate delay
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  async beforeRouteUpdate(to, from) {
    this.post = null;
    console.log(from);
    try {
      this.post = await getPost(to.params.id);
    } catch (error) {
      this.error = error.toString();
    }
  },
  methods: {
    setData(error, post) {
      if (error) {
        this.error = error;
      } else {
        this.post = post;
      }
    },
  },
};
</script>
