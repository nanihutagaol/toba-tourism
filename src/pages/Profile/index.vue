<template>
  <div class="container" style="margin-top:20px">
    <div class="row">
      <div class="col-lg-4" v-for="listProfile in profile" :key="listProfile.key">
        <div class="profile-card-4 z-depth-3">
          <div class="card">
            <div class="card-body text-center bg-primary rounded-top">
              <div class="user-box">
                <img :src="listProfile.image" alt="user avatar"
                />
              </div>
              <h5 class="mb-1 text-white">{{listProfile.name}}</h5>
              <h6 class="text-light">{{listProfile.email}}</h6>
            </div>
            <div class="card-body">
              <ul class="list-group shadow-none">
                <li class="list-group-item">
                  <div class="list-details">
                    <h6>No Handphone</h6>
                    <span>{{listProfile.nohp}}</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="list-details">
                    <h6>Tanggal Lahir</h6>
                    <span>{{listProfile.dob}}</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="list-details">
                    <h6>Alamat</h6>
                    <span>{{listProfile.alamat}}</span>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="list-details">
                    <h6>Sosial Media</h6>
                    <span>{{listProfile.social_media}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card z-depth-3">
          <div class="card-body">
            <div class="edit-profile">
              <h4>Edit Profile</h4>
              <form>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Nama</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Email</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="email" value />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Tanggal Lahir</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Alamat</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="url" value />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">No Handphone</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value placeholder />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Sosial Media</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value placeholder />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-lg-12">
                    <input type="button" class="btn btn-primary save" stlye="border-radius:20px;" value="Simpan Perubahan" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Profile.js"></script>
<style  lang="css" src="./Profile.css" scoped></style>
