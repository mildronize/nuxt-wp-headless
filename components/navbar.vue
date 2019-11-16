<template>
    <b-navbar toggleable="lg" variant="faded" type="light">
      <div class="page-container">
        <b-navbar-brand>
          <div class="logo">
            <NuxtLink to="/">mildronize</NuxtLink>
          </div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">home</b-nav-item>
            <b-nav-item to="/about">about</b-nav-item>
            <b-nav-item to="#">
              <i class="fas fa-search"></i>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
</template>