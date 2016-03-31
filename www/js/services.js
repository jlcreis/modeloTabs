angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Arroz Caçarola 1k',
    lastText: 'R$15,00',
    estabelecimento: 'Supermercado Sales',
    face: 'templates/img/arroz.png',
    validade: '01/04/2016'
  }, {
    id: 1,
    name: 'Feijão Sempre Bom 1k',
    lastText: 'R$ 2,69',
    estabelecimento: 'Supermercado BH',
    face: 'templates/img/feijao.png',
    validade: '01/04/2016'
  }, {
    id: 2,
    name: 'Frango Congelado Gujão Kg',
    lastText: 'R$ 3,98',
    estabelecimento: 'Supermercado BH',
    face: 'templates/img/frango.png',
    validade: '01/04/2016'
  }, {
    id: 3,
    name: 'Leite Integral/Desnatado Cemil 1L',
    lastText: 'R$2,59',    
    estabelecimento: 'Supermercado Sales',
    face: 'templates/img/leite.png',
    validade: '01/04/2016'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
