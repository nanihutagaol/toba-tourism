<template>
  <div class="background">
    <div class="bg">
      <div class="login">
        <d-container class="dr-example-container">
          <d-row>
            <div class="col-md-10 welcome-text">
              <d-card-body>
                <p class="text-welcome">Selamat Datang</p>
                <p class="text-danau-toba">Wisata Danau Toba</p>
                <p class="text-deskripsi">Wisata Danau Toba Wisata Danau Toba Wisata Danau Toba Wisata Danau Toba Wisata Danau Toba Wisata Danau Toba Wisata Danau Toba</p>
              </d-card-body>
            </div>

            <d-card class="col-md-5 login-card">
              <d-card-body>
                <img alt="Login" src="@/image/login.png" class="image">
                <p class="text3">MEMBER LOG IN</p>
                <label class="sr-only" for="f1_Username"><p>Username</p></label>
                <p><d-input id="f1_Username" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username" /></p>
                <label class="sr-only" for="f1_Password">Password</label>
                <p><d-input id="f2_Password" class="mr-2" type="password" placeholder="Password" /></p>
                <d-button pill theme="primary" class="button-login"><p class="text5">LOG IN</p></d-button>
                <!-- <d-link href="#test"><p class="text4">Forgot Your Username or Password?</p></d-link> -->
              </d-card-body>
            </d-card>
          </d-row>
        </d-container>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="./Login.css" scoped></style>

<script>
export default {
  data(){
    return {
      username : '',
      password : '',
    }
  }
}
</script>
