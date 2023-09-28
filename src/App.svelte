<script>
	import { onMount } from "svelte";
	import { ripple } from "svelte-ripple-action";

	onMount(() => {
		document.documentElement.setAttribute(
			"data-theme",
			localStorage.getItem("theme") || "light"
		);
	});
</script>

<div class="p-8">
	<button
		use:ripple
		class="btn"
		on:click={() => {
			const themes = ["light", "dark"];
			const currentTheme = document.documentElement.getAttribute("data-theme");

			const nextTheme = themes.find((theme) => theme !== currentTheme);

			document.documentElement.setAttribute("data-theme", nextTheme || "light");

			localStorage.setItem("theme", nextTheme || "light");
		}}>Button</button
	>
	<button use:ripple class="btn btn-neutral">Neutral</button>
	<button use:ripple class="btn btn-primary">Primary</button>
	<button use:ripple class="btn btn-secondary">Secondary</button>
	<button use:ripple class="btn btn-accent">Accent</button>
	<button use:ripple class="btn btn-ghost">Ghost</button>
	<button use:ripple class="btn btn-link">Link</button>
	<button use:ripple class="btn btn-info">Info</button>
	<button use:ripple class="btn btn-success">Success</button>
	<button use:ripple class="btn btn-warning">Warning</button>
	<button use:ripple class="btn btn-error">Error</button>

	<button class="btn" disabled>Disabled using attribute</button>
	<button class="btn btn-disabled" tabindex="-1" aria-disabled="true"
		>Disabled using class name</button
	>

	<button class="btn btn-link" disabled>Disabled using attribute</button>
	<button class="btn btn-disabled" tabindex="-1" aria-disabled="true"
		>Disabled using class name</button
	>
</div>

<div class="p-8">
	<button use:ripple class="btn btn-outline">Default</button>
	<button use:ripple class="btn btn-outline btn-primary">Primary</button>
	<button use:ripple class="btn btn-outline btn-secondary">Secondary</button>
	<button use:ripple class="btn btn-outline btn-accent">Accent</button>
	<button use:ripple class="btn btn-outline btn-info">Info</button>
	<button use:ripple class="btn btn-outline btn-success">Success</button>
	<button use:ripple class="btn btn-outline btn-warning">Warning</button>
	<button use:ripple class="btn btn-outline btn-error">Error</button>
</div>

<div class="p-8">
	<button use:ripple class="btn btn-lg">Large</button>
	<button use:ripple class="btn">Normal</button>
	<button use:ripple class="btn btn-sm">Small</button>
	<button use:ripple class="btn btn-xs">Tiny</button>
	<button use:ripple class="btn btn-wide">Wide</button>
</div>

<div class="p-8">
	<button class="btn btn-square" use:ripple>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
	<button class="btn btn-square btn-outline btn-lg" use:ripple> a </button>

	<button
		class="btn btn-circle"
		use:ripple={{
			center: true,
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
	<button
		class="btn btn-circle btn-outline"
		use:ripple={{
			center: true,
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>

	<button class="btn btn-icon" use:ripple>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/></svg
		>
		Button
	</button>
</div>

<div class="p-8">
	<details class="mb-32 dropdown">
		<summary class="m-1 btn" use:ripple>open or close</summary>
		<ul
			class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
		>
			<li use:ripple><a href="#!">Item 1</a></li>
			<li use:ripple><a href="#!">Item 2</a></li>
		</ul>
	</details>

	<div class="dropdown dropdown-hover">
		<label tabindex="0" class="m-1 btn" use:ripple>Hover</label>
		<ul
			tabindex="0"
			class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li><a>Item 1</a></li>
			<li><a>Item 2</a></li>
		</ul>
	</div>
</div>

<div class="p-8">
	<!-- Open the modal using ID.showModal() method -->
	<button
		class="btn"
		use:ripple
		on:click={() => {
			//@ts-ignore
			document.querySelector(`#my_modal_1`).showModal();
		}}>open modal</button
	>
	<dialog id="my_modal_1" class="modal">
		<div class="modal-box">
			<h3 class="text-lg font-bold">Hello!</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn btn-ghost btn-primary" use:ripple>Close</button>
				</form>
			</div>
		</div>
	</dialog>
</div>

<div class="p-8">
	<div class="w-full join join-vertical">
		<div
			class="transition-all collapse collapse-plus bg-base-200 hover:bg-base-300"
		>
			<input type="radio" name="my-accordion-3" checked />
			<div class="text-xl font-medium collapse-title">
				Click to open this one and close others
			</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
		<div
			class="transition-all collapse collapse-plus bg-base-200 hover:bg-base-300"
		>
			<input type="radio" name="my-accordion-3" />
			<div class="text-xl font-medium collapse-title">
				Click to open this one and close others
			</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
		<div
			class="transition-all collapse collapse-plus bg-base-200 hover:bg-base-300"
		>
			<input type="radio" name="my-accordion-3" />
			<div class="text-xl font-medium collapse-title">
				Click to open this one and close others
			</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
	</div>

	<div class="p-8" />

	<div class="alert">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="w-6 h-6 stroke-info shrink-0"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>12 unread messages. Tap to see.</span>
	</div>

	<div class="p-4" />

	<div class="alert">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="w-6 h-6 stroke-info shrink-0"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>we use cookies for no reason.</span>
		<div>
			<button use:ripple class="btn btn-ghost btn-sm">Deny</button>
			<button use:ripple class="shadow-none btn btn-sm btn-primary">Accept</button>
		</div>
	</div>
</div>
