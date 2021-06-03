
### Buttons

Note: active selector styles are not demonstrated because TailwindCSS is being used via CDN

#### Default Button

##### Regular

```html
<button class="button bg-gray-700 text-white
p-2 m-4 text-base
border-b-4 border-gray-900
hover:bg-gray-600 hover:border-gray-700
focus:outline-none focus:ring-4 focus:ring-gray-300
active:mt-6 active:border-b-0 active:border-transparent
">Button</button>
```

##### Small

```html
<button class="button bg-gray-700 text-white
p-1 m-2 text-sm
border-b-4 border-gray-900
hover:bg-gray-600 hover:border-gray-700
focus:outline-none focus:ring-4 focus:ring-gray-300
active:mt-6 active:border-b-0 active:border-transparent
">Button</button>
```

##### Large

```html
<button class="button bg-gray-700 text-white
p-4 m-8 text-xl
border-b-4 border-gray-900
hover:bg-gray-600 hover:border-gray-700
focus:outline-none focus:ring-4 focus:ring-gray-300
active:mt-6 active:border-b-0 active:border-transparent
">Button</button>
```

#### Primary Button

```html
<button style="background-color: #f7941d; border-color: #f26522;" class="button text-white
p-2 m-4 text-base
border-b-4
focus:outline-none focus:ring-4 focus:ring-gray-300
active:mt-6 active:border-b-0 active:border-transparent
">Button</button>
```

#### Secondary Button

```html
<button class="button bg-gray-500 text-white
p-2 m-4 text-base
border-b-4 border-gray-700
hover:bg-gray-400 hover:border-gray-500
focus:outline-none focus:ring-4 focus:ring-gray-300
active:mt-6 active:border-b-0 active:border-transparent
">Button</button>
```

#### Circle Buttons

```html
<button class="button bg-gray-700 text-white
rounded-full w-8 h-8 align-middle
text-base
hover:bg-gray-600
focus:outline-none focus:ring-4 focus:ring-gray-300
">B</button>
```

```html
<button class="button bg-gray-700 text-white
rounded-full w-12 h-12 align-middle
text-base
hover:bg-gray-600
focus:outline-none focus:ring-4 focus:ring-gray-300
">Btn</button>
```

##### Fill Button

```html
<button class="button bg-transparent text-gray-700
p-2 m-4 text-base
border-2 border-gray-700
hover:bg-gray-700 hover:text-white
focus:outline-none focus:ring-4 focus:ring-gray-300
">Button</button>
```

#### Disabled Button

```html
<button disabled class="button bg-gray-700 text-white
opacity-50 cursor-default
p-2 m-4 text-base
border-b-4 border-gray-900
">Button</button>
```

#### Button Group

````html
<div class="p-4">
	<div class="flex justify-center items-baseline flex-wrap">
		<div class="flex m-2">
			<button class="button bg-gray-700 text-white
				p-2 text-base
				border-b-4 border-gray-900
				hover:bg-gray-600 hover:border-gray-700
				focus:outline-none focus:ring-4 focus:ring-gray-300
				active:mt-6 active:border-b-0 active:border-transparent
				">Button</button>
			<button class="button bg-gray-700 text-white
				p-2 text-base
				border-b-4 border-gray-900
				hover:bg-gray-600 hover:border-gray-700
				focus:outline-none focus:ring-4 focus:ring-gray-300
				active:mt-6 active:border-b-0 active:border-transparent
				">Button</button>
			<button class="button bg-gray-700 text-white
				p-2 text-base
				border-b-4 border-gray-900
				hover:bg-gray-600 hover:border-gray-700
				focus:outline-none focus:ring-4 focus:ring-gray-300
				active:mt-6 active:border-b-0 active:border-transparent
				">Button</button>
		</div>
	</div>
</div>
````

Note: middle buttons should have no right or left `box-shadow`, on `:first-child` button should have no right `box-shadow`, and on `:last-child` should have no left `box-shadow` for `:focus`.
