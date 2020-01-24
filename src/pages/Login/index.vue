<template>
  <div class="background">
    <div class="bg">
      <div class="login">
        <d-container class="dr-example-container">
          <d-row>
            <div class="col-md-10 welcome-text">
              <d-card-body>
                <p class="text-welcome" style="font-size: 40px; font-family: 'Comic Sans MS'">Selamat Datang di</p>
                <p class="text-danau-toba">Wisata Danau Toba</p>
              </d-card-body>
            </div>
            <d-card class="col-md-5 login-card">
              <d-card-body>
                <img alt="Login" src="@/image/login.png" class="image">
                <p class="text3">MEMBER LOG IN</p>

                <form class="login-form" @submit.prevent="validateForm" ref="form" >
                  <div class="form-group">
                    <input id="username" class="form-control" v-model="user.username" type="text" min="0" placeholder="Username" required>
                  </div>
                  <div class="form-group">
                    <input id="password" class="form-control" v-model="user.password" type="password" min="0" placeholder="Password" required>
                  </div>
                  <d-button pill theme="primary" class="button-login" type="submit"><p class="text5">LOG IN</p></d-button>
                </form>
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
