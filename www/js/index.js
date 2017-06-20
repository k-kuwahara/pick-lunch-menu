
var app = {
   initialize: () => {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      document.addEventListener('init', (event) => {
         const page = event.target;

         if (page.id === 'top') {
            page.querySelector('#push-button').onclick = () => {
               document.querySelector('#myNavigator').pushPage('settings.html', {data: {}})
            }
         }
         else if (page.id === 'settings') {
            document.querySelector('.back-button').onclick = () => {
               document.querySelector('#myNavigator').popPage('settings.html')
            }
         }
      });
   },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.info('%cdeviceready!!', 'color: #008080; font-size: 20px;')

        sqlitePlugin.selfTest(function() {
              // テスト成功
              alert('success')
           },
           function(error) {
              // プラグインテスト失敗
              alert('error')
           });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        const parentElement = document.getElementById(id);
        const listeningElement = parentElement.querySelector('.listening');
        const receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
