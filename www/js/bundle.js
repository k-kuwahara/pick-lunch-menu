var app = {
   initialize: function () {
      document.addEventListener('deviceready', app.onDeviceReady, false);
      document.addEventListener('init', function (event) {
         var page = event.target;

         // TOPページ
         if (page.id === 'top') {
            // 編集ページ遷移
            page.querySelector('#push-button').onclick = function () {
               document.querySelector('#myNavigator').pushPage('settings.html', {data: {}});
            };

            // メニューダイアログ表示
            var btn_dialog = document.querySelector('#show-dialog');
            btn_dialog.addEventListener('click', function () {
               document.getElementById('menu-dialog').show();
            });

            // メニューダイアログ非表示
            btn_dialog = document.querySelector('#hide-dialog');
            btn_dialog.addEventListener('click', function () {
               document.getElementById('menu-dialog').hide();
            });
         }

         // 編集ページ
         else if (page.id === 'settings') {
            document.querySelector('.back-button').onclick = function () {
               document.querySelector('#myNavigator').popPage('settings.html');
            };
         }
      });
   },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        // sqlitePlugin.selfTest(function() {
        //       // テスト成功
        //       alert('success')
        //    },
        //    function(error) {
        //       // プラグインテスト失敗
        //       alert('error')
        //    });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

app.initialize();
