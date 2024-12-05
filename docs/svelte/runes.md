---
title: Runes in Svelte 5 
sidebar_position: 2
---

# Svelte 5 Runes 

Svelte 5 introduces a new concept called "runes," which are compiler instructions used to manage reactivity in Svelte applications. These runes are functions that start with a dollar sign and help define reactive states, effects, properties, and more.

### $state

The `$state` rune is used to declare reactive state variables in Svelte 5. It replaces the implicit reactivity of `let` declarations from previous versions.

```jsx
<script>
  let count = $state(0);
</script>

<button onclick="{() => count++}">Count: {count}</button>
```

In this example, `count` is a reactive state variable initialized to 0. The button click increments the count, and the UI updates automatically due to the reactivity provided by `$state`.

### $effect

The `$effect` rune is used to create side-effects that run when a component mounts or when its dependencies change.

```jsx
<script>
  let total = 100;
  let spent = $state(0);

  $effect(() => {
    if (spent > total) {
      alert('Spent exceeds total!');
    }
  });
</script>

<input type="range" bind:value={spent} max={total} />
```

Here, an effect is created that triggers an alert if `spent` exceeds `total`. The effect runs whenever `spent` changes due to its dependency on the `$state`.

### $props

The `$props` rune is used to handle component properties, allowing for destructuring and default values.

```jsx
<script>
  let { greeting = 'Hello!' } = $props();
</script>

<h1>{greeting}</h1>
```

In this snippet, `greeting` is a prop with a default value of 'Hello!'. The `$props` rune simplifies prop handling by enabling destructuring directly within the script tag.

### $derived

The `$derived` rune is used for creating derived state from other reactive states. It automatically updates when its dependencies change.

```jsx
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<p>{count} doubled is {doubled}</p>
<button onclick="{() => count++}">Increment</button>
```

Here, `doubled` is derived from `count`, and it updates automatically whenever `count` changes. This allows for concise and clear expressions of dependent state.

### $bindable

The `$bindable` rune allows you to create bindable properties that can be linked with form elements or other components.

```jsx
<script>
  let name = $bindable('World');
</script>

<input bind:value={name} />
<p>Hello, {name}!</p>
```

In this example, `name` is a bindable property initialized with 'World'. The input field is bound to `name`, so any changes in the input automatically update the displayed greeting.

Citations:
[1] https://svelte.dev/docs/svelte/v5-migration-guide
[2] https://blog.logrocket.com/exploring-runes-svelte-5/
[3] https://svelte.dev/docs/svelte/$effect
[4] https://svelte.dev/docs/svelte/$props
[5] https://dev.to/kvetoslavnovak/helper-varaibles-in-svelte-5-5cni
[6] https://www.divotion.com/blog/signals-in-svelte-5-a-comprehensive-guide-to-runes
[7] https://svelte.dev/docs/svelte/$state
[8] https://svelte.dev/docs/svelte/$derived
[9] https://sveltekit.io/blog/runes
[10] https://dev.to/webjose/learning-the-new-svelte-v5-reactivity-system-13i4
[11] https://svelte.dev/blog/runes