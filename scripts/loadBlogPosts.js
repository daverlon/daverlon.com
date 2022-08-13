


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
for (var i = 0; i < all_blog_posts.length; i++) {
  const post = all_blog_posts[i];
  const cur_post = $.get("blog-posts/" + post + ".html", function(data) {
    const blog = fetchBlogPost(data);

    const el = document.createElement("div");
    el.className = "blog-post";

    const blog_header = document.createElement("div");
    blog_header.className = "content-header";
    blog_header.textContent = blog.title;

    const blog_date = document.createElement("div");
    blog_date.className = "blog-post-date";
    blog_date.textContent = "• " + blog.date;

    const blog_content = document.createElement("div");
    blog_content.className = "blog-content";
    blog_content.innerHTML = blog.content;

    blog_header.append(blog_date)
    el.append(blog_header);
    el.append(blog_content)

    const content_section = document.createElement("div");
    content_section.classList.add("main-content-section");
    content_section.id = "blog-post-" + i;
    content_section.append(el);
    $("#content-placeholder").append(content_section);
  });
}