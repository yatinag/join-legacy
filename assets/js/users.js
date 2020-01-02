const users = [
  {
    name: 'Grace Santa',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg',
    location: 'New Zealand',
    description: 'Better late than never but never late is better'
  },
  {
    name: 'Jerry Graham',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
    location: 'United States',
    description: "I'm not a businessman, I'm a business, man      "
  },
  {
    name: 'Mitt Anders',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
    location: 'Colombia',
    description: "If you don't succeed, dust yourself off - try again"
  },
  {
    name: 'Teresa Brooks',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample8.jpg',
    location: 'South Africa',
    description: 'When the bassline drops you know what to do     '
  },
  {
    name: 'Maude Jordan',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
    location: 'Qatar',
    description: 'My whole thing is loyalty. Loyalty over royalty '
  },
  {
    name: 'Eleanor Lucas',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample9.jpg',
    location: 'Tokyo',
    description: "Beauty in the struggle, ugliness in the success "
  }
]

const UserCard = {
  template: 
    `<div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="user.image">
            </figure>
          </div>
        </div>
        <div class="media-content">
          <p class="title is-6 is-uppercase font-color-primary has-text-weight-bold">{{user.name}}</p>
          <p class="subtitle is-7 font-color-light has-text-weight-bold">{{user.location}}</p>
          <p class="content has-text-weight-bold font-color-medium">{{user.description}}</p>
        </div>
      </div>
    </div>`,
  props: ['user']
}

new Vue({
  el: '#app',
  computed: {
    firstThreeUsers() {
      return users.splice(0 , 3);
    },
    lastThreeUsers() {
      return users.splice(-3)
    }
  },
  data: {
    users
  },
  components: {
    'user-card': UserCard
  }
})
