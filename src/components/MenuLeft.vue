      <template>
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <div class="ui vertical menu">
          <div class="ui">
  
            <div class="item">
              <div class="ui transparent icon input">
                <input type="text" placeholder="Search Website...">
                <i class="search icon"></i>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Timeline</div>
              <div class="menu">
                <a class="item">Dream Job</a>
                <a class="item">Daily Build</a>
                <a class="item"> Bug Fix Market</a>
                <a class="item">Startups </a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Hiring</div>
              <div class="menu">
                <a class="item">Job Posts</a>
                <a class="item">Candidates</a>
                <a class="item"> Interview Hackathon</a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Startups</div>
              <div class="menu">
                <a class="item">Customer Development</a>
                <a class="item">MVP</a>
                <a class="item">Prototype</a>
                <a class="item">Validate</a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">SMB</div>
              <div class="menu">
                <a class="item">Business Process</a>
                <a class="item">Mapping</a>
                <a class="item">Implementation</a>
                <a class="item">Training</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!--    End of Left Menu     -->
      </template>
      <script>
 
  export default {
    name: 'NavLeftbar',
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  
  #column_1 {
    padding-top: 20px;
  }
  
  #column_2 {
    padding-top: 50px;
    padding-left: 8%;
    width: 60%;
  }
</style>