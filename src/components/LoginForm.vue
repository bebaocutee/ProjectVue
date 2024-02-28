<template>
  <div class="login-container">
    <h1>Đăng nhập</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Đăng nhập</button>
    </form>
    <div v-if="loginStatus" class="login-status">
      {{ loginStatusText }}
    </div>
  </div>
</template>
      
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginStatus: null,
      loginStatusText: "",
    };
  },
  methods: {
    submitForm() {
      const storedUsername = sessionStorage.getItem("username");
      const storedPassword = sessionStorage.getItem("password");

      if (this.username === storedUsername && this.password === storedPassword) {
        this.loginStatus = "success";
        this.loginStatusText = "Đăng nhập thành công!";
      } else {
        this.loginStatus = "failed";
        this.loginStatusText = "Tên người dùng hoặc mật khẩu không chính xác.";
      }

      this.username = "";
      this.password = "";
    },
  },
};
</script>
      
<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: max-content;
    height: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

h1 {
    text-align: center;
}

label {
    font-weight: bold;
}

input {
    display: block;
    width: 400px;
    margin: 10px 0 10px 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 400px;
    margin: 10px 0 10px 0;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
}
</style>