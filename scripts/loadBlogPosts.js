
$(document).ready(function() {

class BlogPost {
  constructor(title, date, content) {
    this.title = title;
    this.date = date;
    this.content = content;
  }
}

function fetchBlogPost(page) {
  var lines = page.split("\n");
  var first_line = lines[0]; // contains title
  var second_line = lines[1]; // contains date

  var temp_title = first_line.split("=")[1];
  var temp_date = second_line.split("=")[1];

  var temp_content = lines.slice(2, lines.length).join("");
  return new BlogPost(temp_title, temp_date, temp_content);
}


const posts = all_blog_posts;

jQuery.ajaxSetup({async:false});

for (let i = 0; i < all_blog_posts.length; i++) {
    const post = all_blog_posts[i];
    jQuery.get("blog-posts/" + post + ".html", function(data) {
      var blog = fetchBlogPost(data);
      //console.log(blog.title);

      let el = document.createElement("div");
      el.className = "blog-post";
  
      let blog_header = document.createElement("div");
      blog_header.className = "content-header";
      blog_header.textContent = blog.title;
  
      let blog_date = document.createElement("div");
      blog_date.className = "blog-post-date";
      blog_date.textContent = "• " + blog.date;
  
      let blog_content = document.createElement("div");
      blog_content.className = "blog-content";
      blog_content.innerHTML = blog.content;
  
      blog_header.append(blog_date)
      el.append(blog_header);
      el.append(blog_content)
  
      let content_section = document.createElement("div");
      content_section.classList.add("main-content-section");
      content_section.id = "blog-post-" + i;
      content_section.append(el);
      $("#content-placeholder").append(content_section);
      
    });

}


window.addEventListener('load', function() {
  // get the anchor tag from the URL
  var anchor = window.location.hash.substring(1);
  // find the blog post with the anchor tag
  var post = document.getElementById(anchor);
  // listen for the load event of the blog post
  // scroll the window to the post, with an offset to position the post at the top of the screen

  setTimeout(function() {
      post.parentElement.parentElement.parentElement.scrollIntoView();
  }, 500);
});



jQuery.ajaxSetup({async:true});

});

