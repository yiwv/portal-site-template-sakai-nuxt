<script setup>

import Avatar from "vue-boring-avatars";



</script>


<template>
    <!-- <div class="flex align-items-center py-5 px-3">
        <i class="pi pi-fw pi-star mr-2 text-2xl" />
        <p class="m-0 text-lg">Reviews</p>
    </div> -->

    <div>


        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="flex flex-column md:flex-row">
                <div class="w-full md:w-6">
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">5</span>
                            <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                            <div class="h-full bg-yellow-500 w-9 border-round"></div>
                        </div>
                    </li>
                    <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">4</span>
                        <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                            <div class="h-full bg-yellow-500 w-6 border-round"></div>
                        </div>
                    </li>
                    <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">3</span>
                        <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                            <div class="h-full bg-yellow-500 w-2 border-round"></div>
                        </div>
                    </li>
                    <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">2</span>
                        <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                            <div class="h-full bg-yellow-500 w-4 border-round"></div>
                        </div>
                    </li>
                    <li class="flex align-items-center mb-2"><span class="text-900 font-medium mr-2 w-1rem">1</span>
                        <div class="border-round overflow-hidden flex-auto surface-300" style="height: 7px;">
                            <div class="h-full bg-yellow-500 w-3 border-round"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="w-full md:w-6 flex flex-column align-items-center justify-content-center mt-4 md:mt-0"><span
                    class="text-5xl font-medium text-900 mb-3">3.0</span><span class="mb-2"><i
                        class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i><i
                        class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i><i
                        class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i><i
                        class="pi pi-star-fill text-yellow-500 mr-1 text-2xl"></i><i
                        class="pi pi-star-fill text-300 text-2xl"></i></span><a tabindex="0"
                    class="cursor-pointer text-blue-500 hover:text-blue-600 transition-colors transition-duration-300 font-medium">85
                    Reviews</a></div>
        </div>
        <div class="border-top-1 surface-border mt-5 py-5">
            <div class="flex align-items-center justify-content-between mb-5">
                <button class="p-button p-component" style="width: 200px;"
                    type="button" aria-label="Write a review"><!---->
                    <span class="p-button-label">
                        Write a review
                    </span>
                        <!----><span class="p-ink" role="presentation" aria-hidden="true"
                        style="height: 152px; width: 152px; top: -45px; left: 31px;"></span></button>
                <div class="p-dropdown p-component p-inputwrapper p-inputwrapper-filled" id="pv_id_1"><span
                        class="p-dropdown-label p-inputtext" tabindex="0" role="combobox" aria-label="Most recent"
                        aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_1_list"
                        aria-disabled="false">Most recent</span><!---->
                    <div class="p-dropdown-trigger"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="p-icon p-dropdown-trigger-icon"
                            aria-hidden="true">
                            <path
                                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                                fill="currentColor"></path>
                        </svg></div>
                </div>
            </div>
            <div class="grid -mt-3 -ml-3 -mr-3">
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">

                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-f-1.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="'B' + Math.random(10) + 1" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Code Fisher</span><span
                                    class="text-sm font-medium text-500">1d ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-300"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Etiam tempor orci eu lobortis elementum nibh
                                tellus. Auctor eu augue ut lectus arcu bibendum at varius vel. Id aliquet lectus proin
                                nibh nisl. Lorem ipsum dolor sit amet consectetur. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">


                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-f-2.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="'A' + Math.random(10) + 2" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Eleanor Pena</span><span
                                    class="text-sm font-medium text-500">3d ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Scelerisque varius morbi enim nunc. Arcu bibendum
                                at varius vel pharetra vel turpis nunc eget. Elit ut aliquam purus sit amet luctus.
                                Aliquam etiam erat velit scelerisque in. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">

                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-f-3.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="'C' + Math.random(10)" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Claire Jones</span><span
                                    class="text-sm font-medium text-500">4d ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-300 mr-1"></i><i
                                        class="pi pi-star-fill text-300 mr-1"></i><i
                                        class="pi pi-star-fill text-300"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Laoreet id donec ultrices tincidunt arcu non
                                sodales neque. A pellentesque sit amet porttitor eget. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">

                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-m-1.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="Math.random(10)" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Robert Fox</span><span
                                    class="text-sm font-medium text-500">1w ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-300"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Orci porta non pulvinar neque laoreet suspendisse
                                interdum consectetur. Vitae elementum curabitur vitae nunc sed velit dignissim sodales
                                ut. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">

                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-f-4.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="Math.random(10)" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Katie Murphy</span><span
                                    class="text-sm font-medium text-500">1w ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-300"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Sollicitudin nibh sit amet commodo nulla facilisi
                                nullam vehicula. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
                                quis. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="p-2">
                        <div class="border-1 surface-border border-round p-3">
                            <div class="flex align-items-center mb-3">

                                <!-- <img
                                    src="images/blocks/avatars/circle/avatar-f-5.png"
                                    class="w-2rem h-2rem flex-shrink-0 mr-2">
                                     -->
                                    <Avatar variant="beam" :name="Math.random(10)" class="mr-3"/>

                                    <span
                                    class="text-900 font-medium mr-3">Arlene McCoy</span><span
                                    class="text-sm font-medium text-500">2d ago</span><span class="ml-auto"><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-yellow-500 mr-1"></i><i
                                        class="pi pi-star-fill text-300 mr-1"></i><i
                                        class="pi pi-star-fill text-300 mr-1"></i><i
                                        class="pi pi-star-fill text-300"></i></span></div>
                            <p class="m-0 p-0 line-height-3 text-600"> Cursus eget nunc scelerisque viverra mauris in
                                aliquam. Sed ullamcorper morbi tincidunt ornare massa. Eu tincidunt tortor aliquam nulla
                                facilisi. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
