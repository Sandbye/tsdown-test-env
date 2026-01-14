<script lang="ts">
  import type { UI } from "@repo/ui";
  import { account } from "./index";
  let { label = "Click me", onclick }: UI.Button.Props.Default = $props();
  let count = $state(0);

  function increment() {
    count++;
    onclick?.(count);
  }
</script>

<button class="my-button" onclick={increment}>
  {label}: {count}
</button>

<div>
  <h2>Account Information</h2>
  <p><strong>Name:</strong> {account.user.name}</p>
  <p><strong>Email:</strong> {account.user.email}</p>
  <h3>Orders:</h3>
  <ul>
    {#each account.orders as order}
      <li>
        Order ID: {order.id}, Total Amount: ${order.totalAmount}
      </li>
    {/each}
  </ul>
</div>

<style>
  .my-button {
    padding: 0.6em 1.2em;
    font-size: 1em;
    border: 1px solid #ff3e00;
    border-radius: 4px;
    background-color: #ff3e00;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  .my-button:hover {
    background-color: #ff5722;
    border-color: #ff5722;
  }

  .my-button:active {
    transform: scale(0.98);
  }
</style>
