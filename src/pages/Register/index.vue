<template>
  <div class="background">
    <div class="bg">
      <div class="login">
        <d-container class="dr-example-container">
          <d-row>
            <div class="col-md-9 welcome-text">
              <d-card-body>
                <p class="text-welcome" style="font-size: 40px; font-family: 'Comic Sans MS'">Selamat Datang di</p>
                <p class="text-danau-toba">Wisata Danau Toba</p>
              </d-card-body>
            </div>

            <d-card class="col-md-6 login-card">
              <d-card-body>
                <img alt="Login" src="@/image/login.png" class="image">
                <p class="text3">MEMBER REGISTER</p>

                <form class="register-form" @submit.prevent="validateForm" ref="form" >
                  <div class="form-group">
                    <input id="fullname" class="form-control" v-model="account.fullname" type="text" min="0" placeholder="Nama Lengkap" required>
                  </div>
                  <div class="form-group">
                    <input id="username" class="form-control" v-model="account.username" type="text" min="0" placeholder="Username" required>
                  </div>
                  <div class="form-group">
                    <input id="email" class="form-control" v-model="account.email" type="email" min="0" placeholder="Email" required>
                  </div>
                  <div class="form-group">
                    <input id="password" class="form-control" v-model="account.password" type="password" min="0" placeholder="Password" required>
                  </div>
                  <div class="form-group">
                    <input id="alamat" class="form-control" v-model="account.alamat" type="text" min="0" placeholder="Alamat" required>
                  </div>
                  <div class="form-group">
                    <input id="dob" class="form-control" v-model="account.dob" type="date" min="0" placeholder="Tanggal Lahir" required>
                  </div>
                  <div class="form-group">
                    <input id="nohp" class="form-control" v-model="account.nohp" type="number" min="0" placeholder="No Handphone" required>
                  </div>
                  <p v-if="isAuthError===true" style="color: red;font-size: 14px">{{authMessageError}}</p>
                  <d-button pill theme="primary" class="button-login" type="submit"><p class="text5">REGISTER</p></d-button>
                </form>
              </d-card-body>
            </d-card>
          </d-row>
        </d-container>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="./Register.css" scoped></style>
