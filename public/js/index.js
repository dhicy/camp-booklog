var app = app || {};

app.BookInfo = Backbone.Model.extend({
    defaults: {
        _id: '',
        name: '',
        title: ''
    },
    url: function() {
        return '/books/12345/collections/index'
    }
});

app.Author = Backbone.Model.extend({
    defaults: {
        name: 'Hank Wang',
        hash: '400c529007e2242ac7132c78fc772e91'
    },
    url: function() {
        return '/books/1/author'
    }
});

app.AuthorView = Backbone.View.extend({
    el: '#author',
    template: _.template($('#tmpl-author').html()),
    initialize: function() {
        this.model = new app.Author();
        this.model.fetch();
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        console.log(this.model.attributes);
        this.$el.html(this.template(this.model.attributes));
    }
});

// app.BookInfoView = Backbone.View.extend({
//     el: '#bookinfo',
//     template: _.template($('#tmpl-bookinfo').html()),
//     initialize: function() {
//         this.model = new app.Author();
//         this.model.on('change', this.render);
//         // GET /books/12345/collections/index
//         this.model.fetch();
//     },
//     render: function() {
//         this.$el.html(this.template(this.model.attributes));
//     }
// });

// app.WikiView = Backbone.View.extend({

// });

app.MainView = Backbone.View.extend({
    initialize: function() {
        app.authorView = new app.AuthorView();
        // app.bookInfoView = new app.BookInfoView();
        // app.wikiView = new app.WikiView();
    }
});

$(function() {
    app.mainView = new app.MainView();
});
