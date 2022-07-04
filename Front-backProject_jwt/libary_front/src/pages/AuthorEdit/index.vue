<template>
  <div>
    <div>
      <label>
        Name
        <input type="text" v-model="author.name" />
      </label>
    </div>
    <div>
      <label>
        Age
        <input type="number" v-model="author.age" />
      </label>
    </div>
    <div>
      <label>
        Photo
        <input type="file" @input="createLogoImage" />
      </label>
      <img id="img" :src="photoSrc" alt="" />
    </div>
    <button @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthorEdit",

  data() {
    return {
      author: {},
      rawPhotoData: null,
    };
  },

  computed: {
    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.author.photo && this.getImgSrc(this.author.photo))
      );
    },
    receivedAuthorId() {
      return this.$route.params.id;
    },
    btnLabel() {
      return this.receivedAuthorId ? "Update" : "Add";
    },
  },

  methods: {
    ...mapActions("author", ["getAuthorById", "addAuthor", "updateAuthor"]),
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    createLogoImage(event) {
      const file = event.target.files[0];
      console.log("file");
      console.log(file);
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.author.photo = file;
      };
      reader.readAsDataURL(file);
    },

    async onSave() {
      try {
        if (!this.receivedAuthorId) await this.addAuthor(this.author);
        else await this.updateAuthor(this.author);
        this.$router.push({ name: "authors" });
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    if (this.receivedAuthorId) {
      try {
        this.author = await this.getAuthorById(this.receivedAuthorId);
        console.log("this.author");
        console.log(this.author);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
