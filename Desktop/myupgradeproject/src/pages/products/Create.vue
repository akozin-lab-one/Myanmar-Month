<template>
    <div class="p-4 sm:ml-64 ">
        <div class="p-4 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Create Products</h2>

            <div class="relative overflow-x-auto mb-3">
                <form class=" lg:w-[50%] w-[90%] mx-auto">
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name" required />
                    </div>
                    <div class="mb-6">
                        <label for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="" id="category">
                            <option value="">choose category</option>
                        </select>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2 grid-cols-2">
                        <div>
                            <label for="qty"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qty</label>
                            <input type="number" id="qty"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="qty" required />
                        </div>
                        <div>
                            <label for="unit"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                            <input type="text" id="unit"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Unit" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="pcs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PCS
                            </label>
                        <input type="number" id="pcs"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="How many pcs" required />
                    </div>
                    <div class="mb-6">
                        <label for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" id="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Price" required />
                    </div>
                    <div class="mb-6">
                        <label for="shop"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop</label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="" id="shop">
                            <option value="">choose shop</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="dateTime"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="dateTime"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required />
                    </div>
                    <div class="mb-6">
                        <label for="qrcode"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qr Code</label>
                        <input type="checkbox"  name="" id="qrcode" required><span class="text-sm ms-4">Please checked qrcode!!</span>
                    </div>

                    <button type="submit"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>

    </div>
</div></template>
