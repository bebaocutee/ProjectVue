<template>
  <div class="register-container">
    <h1>Đăng ký</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" v-model="username" required />
        <span class="error-message">{{ error.username }}</span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <span class="error-message">{{ error.email }}</span>
      </div>

      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required />
        <span class="error-message">{{ error.password }}</span>
      </div>

      <div>
        <label for="confirmPassword">Nhập lại mật khẩu:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required/>
        <span class="error-message">{{ error.confirmPassword }}</span>
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Kiểm tra yêu cầu tên người dùng
      if (!/^[a-zA-Z0-9]{5,15}$/.test(this.username)) {
        this.error.username = "Tên người dùng gồm 5-15 ký tự. Không chứa ký tự đặc biệt!";
        return;
      } else {
        this.error.username = "";
      }

      // Kiểm tra yêu cầu email
      if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.error.email = "Email không hợp lệ.";
        return;
      } else {
        this.error.email = "";
      }

      // Kiểm tra yêu cầu mật khẩu
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}/.test(this.password)) {
        this.error.password = "Mật khẩu nhiều hơn 6 ký tự. Chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt, 1 chữ thường";
        return;
      } else {
        this.error.password = "";
      }

      // Kiểm tra mật khẩu nhập lại khớp với mật khẩu đã đặt
      if (this.password !== this.confirmPassword) {
        this.error.confirmPassword = "Mật khẩu không khớp.";
        return;
      } else {
        this.error.confirmPassword = "";
      }

      // Lưu thông tin đăng ký vào sessionStorage
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);

      // Đặt các giá trị về trạng thái ban đầu
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";

      alert("Đăng ký thành công!");
    },
  },
};
</script>
    
<style scoped>
.register-container {
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