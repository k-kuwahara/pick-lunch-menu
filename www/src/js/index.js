
const app = {
   initialize: () => {
      document.addEventListener('deviceready', app.onDeviceReady.bind(this), false);
      document.addEventListener('init', (event) => {
         const page = event.target;

         // TOPページ
         if (page.id === 'top') {
            // 編集ページ遷移
            page.querySelector('#push-button').onclick = () => {
               document.querySelector('#myNavigator').pushPage('settings.html', {data: {}})
            }

            // メニューダイアログ表示
            let btn_dialog = document.querySelector('#show-dialog')
            btn_dialog.addEventListener('click', () => {
               document.getElementById('menu-dialog').show()
            })

            // メニューダイアログ非表示
            btn_dialog = document.querySelector('#hide-dialog')
            btn_dialog.addEventListener('click', () => {
               document.getElementById('menu-dialog').hide()
            })
         }

         // 編集ページ
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
    },
};

app.initialize();
