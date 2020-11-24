<template>
  <Layout>
    <div class="contact-container accent-bottom">
      <h1 class="accent">Contact OSB Architects</h1>
      <p class="intro">
        Please get in touch for further detailed information on our services, to request a 
        quote, to discuss our current availability or to arrange a free, no obligation, initial 
        consulation meeting

        Please send us a message or drop us a line, we would love to hear from you to discuss 
        how we can create your happy
      </p>
      <div class="static-containter">
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label p">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext p" id="staticEmail" value="info@osb-architects.co.uk">
          </div>
        </div>        
        <div class="form-group row">
          <label for="call" class="col-sm-2 col-form-label p">Call</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext p" id="call" value="0787 345 9044">
          </div>
        </div>
      </div>

      <h1>Quick Message</h1>
      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="form-group"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div class="form-group row">
            <label for="name" class="col-sm-4 col-form-label p" >Your name</label>
            <input type="text" name="name" v-model="formData.name" class="col-sm-8"/>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-4 col-form-label p">Your email</label>
            <input type="email" name="email" v-model="formData.email" placeholder="name@example.com" class="col-sm-8 p"/>
          </div>
        </div>
        <div class="form-group">
          <label for="message" class="p">Message</label>
          <textarea name="message" v-model="formData.message"
                    class="form-control p" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg shadow float-right clearfix">Send</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../layouts/theme.scss';
.contact-container {
    margin-bottom: 40px;
    padding: 150px 20px 0px 20px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    h1 {
      margin-bottom: 20px;
    }

    textarea {
      border: 1px solid $grey;
    }
    
    .intro {
      text-align: right;
      margin-bottom: 40px;
      padding-left: 20px;
    }

    .static-container {
      margin-bottom: 40px;
    }
}
</style>