

### **<code>&lt;head&gt;</code>  href Attribute**
<br/>
The HTML <code>&lt;head&gt; </code> element is a container for the following elements: <code> &lt;title&gt; </code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> ...

<br/>

The <code>&lt;head&gt;</code> element is a container for metadata (data about data) and is placed between the <code>&lt;html&gt;</code>tag and the <code>&lt;body&gt; 
</code> tag.
The <code> &lt;title&gt; </code> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The <code>  &lt;link&gt; </code> element defines the relationship between the current document and an external resource.


****
### **<code> &lt;img&gt; </code> Tag**
<br/>
The <code>&lt;img&gt;</code> tag has two required attributes:

1.  **src** : Specifies the path to the image
2. **alt** : Specifies an alternate text for the image, if the image for some reason cannot be displayed
<br/>
****
### **<code> &lt;a&gt;  </code>Tag**

 1. <strong>href="#" </strong> to link to the top of the current page!
 2. <strong>internal link </strong>: <code>  &lt;a href="about.html" &gt;</code> 
 3. <strong>external link </strong>:<code>  &lt;a href="https://www.facebook.com/" target="_blank"&gt; </code>facebook><code>&lt;/a&gt;</code> 
 4. We can link to another section on the same page:<code>  &lt;a href="#section2&gt; </code> section-2 <code>&lt;/a&gt;</code>  <strong> section2 referred to the id declared in tag element < p ></strong>

</br>

****
### **<code>&lt;strong&gt; </code>Tag**
The content inside is typically displayed in **bold**.
### **<code>&lt;em&gt; </code>Tag :**
The content inside is typically displayed in italic<br/> 
**ex:**<p>You <em>have</em> to hurry up!</p>
&lt;em&gt;have&lt;/em&gt; : is in italic 
<br/>
****
### **<code>&lt;ul&gt; </code>Tag defines an unordered list**

 <code>&lt;ul&gt; </code>  with <code>&lt;li&gt;</code>  tag create unordered lists **ex:**
 <code>&lt;ul&gt; </code><br/>
<code>&lt;li&gt; </code><br/>
a<br/>
<code>&lt;/li&gt; </code><br/>
<code>&lt;ul&gt; </code>
 <ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>

### **<code>&lt;ol&gt; </code>List :ordered list can be numerical or alphabetical**
<code>&lt;ol&gt; </code><br/>
<code>&lt;li&gt; </code><br/>
a<br/>
<code>&lt;/li&gt; </code><br/>
<code>&lt;ol&gt; </code>
<ol >
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ol>

***
**Nested list :**<br>
 <code>&lt;ul&gt; </code>with <code>&lt;ol&gt;</code>  tag **ex:**<br>
 **input:**<br>
 <code>&lt;ul&gt; </code><br/>
<code>&lt;li&gt; </code><br/>
a<br/>
<code>&lt;ol&gt; </code><br/>
<code>&lt;li&gt; </code><br/>
a<br/>
<code>&lt;/li&gt; </code><br/>
<code>&lt;ol&gt; </code>
<code>&lt;/li&gt; </code><br/>
<code>&lt;ul&gt; </code><br>
 **output:**<br>

<ul>
  <li>a</li>
  <li>hello
  <ol >
  <li>d</li>
  <li>a</li>
  <li>s</li>
</ol></li>
  <li>b</li>
</ul>

****
**Navigation**
<br>
 **input:**<br>
 <code>&lt;ul&gt; </code><br/>
<code>&lt;li&gt; </code><code>&lt;a  href="home.html" &gt; </code><br/>
a<br/>
<code>&lt;/li&gt; </code><br/>
<code>&lt;ul&gt; </code><br>
 **output:**<br>
<ul>
  <li><a href="home.html">home</a></li> when i click it will take me to home page
  <li><a  href="./html/about.html">about</a></li>
 
</ul>