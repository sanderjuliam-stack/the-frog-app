<h1>The Froggy To-Do App</h1>
Interactive application for task management, developed with Electron.

<h2>About the project</h2>
Froggy To-Do is the classic first to-do project that every dev has to learn, but with aesthetic appeal and some fun interactivity: when a task is checked, Froggy jumps.

![Froggy](https://github.com/user-attachments/assets/bd9ce573-d1a3-4f4f-bc34-d06418da49d2)

<h2>Technologies</h2>
<ul>
	<li>Electron JS: To transform technologies into native desktop experiences.
</li>
	<li>JavaScript (ES6+): DOM manipulation and data persistence logic.
</li>
	<li>HTML5 & CSS3: Structure and spritesheet animations.
</li>
	<li>LocalStorage: To save your tasks after the app is closed.
</li>
</ul>
<h2>Functionalities</h2>
<ul>
	<li>Add tasks: intuitive interface to fast insertion.
</li>
	<li>Edit tasks: just click to edit an existing task.
</li>
	<li>Interactive animation: swiching of states (normal and jump) for froggy.
</li>
	<li>Persistence: data is saved in LocalStorage.
</li>
	<li>Customized UI: frameless window to an aesthetic feeling.
</li>
</ul>
<h2>Project structure</h2>
<table>
	<tr>
			<th>Files</th>
			<th>Purpose</th>
	</tr>
	<tr>
		<td>index.html</td>
		<td>Visual structure of task's list and animation container.</td>
	</tr>
	<tr>
		<td>main.js</td>
		<td>Manage lyfecicle of native window and comunication with operating system.</td>
	</tr>
	<tr>
		<td>style.css</td>
		<td>All styles for the aplication, including animation with spritesheets.</td>
	</tr>
	<tr>
		<td>preload.js</td>
		<td>Security bridge. It safaly exposes APIs to front-end, keeping context isolation.</td>
	</tr>
	<tr>
		<td>renderer.js</td>
		<td>Interface logic. It takes the DOM manipulation, trigger the animations and storage of tasks.</td>
	</tr>
	<tr>
		<td>img/</td>
		<td>Folder containing visual assets.</td>

</table>
<h2>How to install</h2>
Make sure to have node.js installed previusly.
<h3>1- Clone repository</h3>

```bash
git clone https://github.com/sanderjuliam-stack/the-frog-app.git
cd the-frog-app
```
<h3>2- Insatall dependencies</h3>

```bash
npm install
```
This will install Electron and all necessary packages listed in ```package.json```
<h3>3- Run the app!</h3>

```bash
npm start
```
This will open the-frog-app as a desktop application powered by Electron.

