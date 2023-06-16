import React from 'react';
import { motion } from "framer-motion";

const TestimonialsSection = () => {


    return (
  
<div className='my-32'>
<h2 className="text-3xl text-primary font-bold text-center mb-10">Student Insights</h2>
<section className='grid md:grid-cols-3 grid-cols-1 gap-3  container mx-auto'>


            <figure className=" bg-blue-900 rounded-lg shadow-lg w-full h-full ">
    <div className="flex items-center justify-center mb-4 text-yellow-300 rounded-3xl">
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
    <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center md:text-justify ">"Mindspark's personalized approach, progress tracking tools, and diverse subject offerings make it a top choice for individuals looking to expand their knowledge and skills online."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center pb-2 mt-6 space-x-3">
        <img className="w-6 h-6 rounded-full " src="data:image/jpeg;base64,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" alt="profile picture"/>
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
    </figcaption>
</figure>








            <figure className=" bg-blue-900  rounded-lg shadow-lg w-full h-full ">
    <div className="flex items-center justify-center mb-4 text-yellow-300 rounded-3xl">
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
    <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center md:text-justify ">"Mindspark offers a comprehensive selection of courses with interactive content and adaptive learning, resulting in an engaging and effective learning experience."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center pb-2 mt-6 space-x-3">
        <img className="w-6 h-6 rounded-full " src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGRgaHBocHBoaGhoaGBgYHBwaGRoYGBgeIS4lHB4rIRwYJjgnKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8PERERETEdGB00MTE0MTExMT8xMTExMTExNDE/ND80NDExNDQxMTExMTExPzExMTExMTExMTExMTExMf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA6EAABAwIDBQUHAwMEAwAAAAABAAIRAyEEMUEFBhJRYXGBkcHwBxMiMqGx0RRC4SNy8SRSgpIzNKL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOiFLASSEaIIoIQgEACUiSmoFBGUlBxQESilArObb3zw2Glrn8bx+xkE9hJMDxQaIlEXLkm0/aVXeeGgxjAf93xu8oWcxm9+LeHE4h4yENPCMhIgc0HfHPHNE2ovOTNr15l1Wo6M5qO807Q3gxLHcTK72n+4m3KDI+io9GSklcgwHtJxLPhqBtTK8cJjqRaVPwntMqOf8VJhZyBMj/lHkia6XUTZVXhd46FRodx8PFofPkrOZ7EU30RORuCIiyAggwo5SWoJDECUlhRIFSgi4UEE2UEEFAJRORpJKBSDXJBQabqh0lU+3t4qGFZx1X30aLvceQCPb22GYam6o/TITmTkFwfbe1qmIqOqPJJcTA0DRk0Dp+VBf7yb/wCIxALKf9JnIfORfN3ZyhZFtR17wdb35E9qbFSYzmU49gvHIZ9t1QyypBmY9ZyjHmktZ18FIpUTw8WUHnE8yoG/dkWMeY15ZZpTmXyNxbp2dyedQBlw/wAydISW0yLnP7847oVCKbDP5zA18lLpCDaZm8fiOxIptMidYUuhTIcTfInuHmfJBKONexoAP2la3c7epwc2jWd8Jsxx/aZADSeV7LK4XA8fE4n8eGpTdTCQSDIImb8tZ8EZdtLkRdZY7dLeXiDcPXPxgcLHk/MNA7r91rnI0dDkgugoNdZIqIH2OSiUyxydcgVx9UEwggtUQRolAERKNJKoBTOIfwtJJi0zyA1ToKwHtL2+6kwUGOhzwS4iJDIy7T5IMfvlt39TWIDv6bLNGhOridZjwWXqcMnrpNuv2GSJz7Z+RvqeeiYmdT6/lApwuCLxn4Tn6zQqOJznK3flAQozqLDUQcgY1SnsPI+pz8EBBogHI9fueSksZpnmZ/HLJN0KTu77HqrLAvDHCRbK/ifJAGUZAdp4Tr4i/wBU7wSeECSLi2ukdxhO1qJa5zNDdo7TItzgi60Owdjl5BAtGv2EaZW6IKZ2BaCJBgCR2n1dRKzwHRlFj3QQO9dSG6ZLcrqtr+z8OJMkHXyQcwftF2cGOQ5BTsFtkujiE6fytfjfZ8YsIjUDwBWK2rsR9AwZiTYW9eCC9980gOgSMiLQOc81v9ibS98wO1FndoXH9n4k2GQOnO/Vavd7anBVj9rjHDkQdDHeUHSmoiU3ha4e2R2HmCEt6BbSl8aZa5GSgUgkcSCC4KMoiUagSiclFE5URMRiAxpc7IX6QFwzefHGviKlTQuMf2iwXVt+Md7rDOj5nCAM552XF8RX+aRfmNJEnvQRH+HTl4qZszZLqxsYEwTFxr4qFmYEGemUldG2ThQym0RpfqSiWk7K3dY3STGuavKOwaTgOJjdMhfvPgk4b8X8lcYdwJGSIr2brUI+QeE9JTVfcmm7Kx7M5WnpjvUtpHL16+yNMXht0SHNDncQGR1gLa7O2cym0BrQIT1MiE+wIJLbp1osmmlSGBQIewQbeuxZDejYfGziaRxC4y8FteFQMXSmbIPP21cK5rpczguctRzCYDXcIgnobzImx6QtxvxRA4pAsJA6awOax+DJdTfF+CDGsc/p9FWXQNzcaX0/izH0IEH7LQ1FhfZ3iSX1GcUiA4C3UHyW5cjRICJxRNKQ90IF8SNMcaCDRIQjRSoCIQMSjLUUIOa+0UvdL/2McGjvsfr9lzY0iDnPInxgDvGS69v1hSMPVGhgttJ+abLklQmACACT/gqhmgPiuRmOcW0iV0bCPJYDkCB25Lm7ZLhYm4jtmZEerLo+DJDGiLwJ7e1Eqxw77hWeGJsexVmGbqPUK2w9uXrNFWLH+vXcptM8zKgMEDx+6n4cfVBIplPtP+OSZDYCfpeUqCUxqkMMBMUwnoQG5yYe6SlvTTig5v7TWNERmQQcspC51sl4a944sxBEZ9F0T2l1AODUlruxc1wty6DkR4ReFRdbpVjSxzG5NeXMOlnD4TnzAXVXrJbqbODoqvbcXbr4HktTVKA0y9JL0l7kBcPX7okOMIINQCgGognFA2QgEtwSJQY/2i7YZSpspkSXnwaM1yraTPlImPyt1v5hy/FQ67Qxsd826arObXwzGtALotA0AN/Aqik2JheOu3kPijs/k/Vb5pa25Nhz0Cy26tL4nutYQPqT5FWW0S4gsFgQZJiyMpj94qTPlJJ6ch6CsMDvNSdALg3PNYirs6lPxVSD0gDx5qJicPSbBZXk6A26H11Qdgw2Ma64M/ZW2GxIsuHYbbNWn8LXzHU65Z56rSbI31+VrwR1idf5Rp1v3oOqW16zOD2lxAETGartobwvaS0CPWSJroDMR1UhuIbF3DJcTr714kSBAvAJtYKThNpYqqD8bMxbiMjwQ12D9SwmA4EpqsLwsTgaeJs7hkjOCJ0zWm2diHmWvzjWJ8FFc/8AaXSPv6R0cx1+oP4KwDBwNJvxGb6knQdYldY9ouFDm03ESQXDxA/CqN0dggFtZ7eJrGktaRbivdUW+7lAsw7GkEODQTOckT+VY1slA2VvK3FPq0/dhjqWRBnibMX6/kKZWMhBFLrpxxUd1yltdZAOEIISef2/CCDWBKlJCOFAZSHIyUkoMjvnhvjY/mOE9xBHmsbj8Ga3GzQN4pjlNpXS95cDx0THzMPEIztmAsXTceBxDbkXjsMfdVKpd2KIFIn/AHOPbZTcfgXOs2QeeX8FM7ug+6Ejhzt1laJjA4Z3ARGGobvEvl5JbqDMdtky/YVUVOFjWPpl03IDeEQQ1wkEa5Zrb1MDIgGOsa92iikPaIbHbkgym2thljh7omC2MjHEMtLZlM7K2a7jHGAYgzqL681pKmEeZL3kmxjQJeEwpD+LWYQbbd3ZoLLt7U3vBs+QWsaASDeOivN2RLBbRObSwvGSUacXqbFq1anA46WIgNt9cyoWyMBUbifcTUY+SBw3LjYtBBsGWdLuoXT6ux3sfLXSJ10lTcDgCH8RBn7g9UGed+twr2gj3rNSJkc8ludl1+MA8JFpup+GYIuNI7U42m0XAA9QoMlv1RljLn5r9noJewsXTezhYIDWhvQR/gob9O/pN/vHbkqvdOnDHk5XVFfuzguDE4p+jiWj/tKvar0TaQZNruPEfLJNOejJpqU1NyZTjXI0CCEoINehKDigoAkhGSgECgslt3YxYXVKfyGS5omWnO3RawlEUHLMOICsMNVAMef3+id3hwzGYhzWANaQ0gDKSJMd8qsY+De6rK2dUkWt6+yaDZ69iQznGnblmlvqAD161RoziCOXrqmsLBcD3+WSbxLpOaGGqs44nUeKMui7tmGx2K0fCqd33iBfS6s3PFyCo0J9MaDuSWURp1TLMVOeeSWKnJBJY5KL7JkFJ4/BBU7Z2X+pcxhMMDuJ3M9iRWwrKQ4GgBmg1PJScdjSwiBcyqatXc8kuN1Qmo8kk6qO43S+JMVHR6ugU4apIeiBTYzQO8KCElBBsgjRNSkCQ1KQRaKAFGiCCDEb3s/1H/FnmFSN65+rStDvrTIqMdo5pHe0nyIVCynziPBVlLojSY9ZIonqPUJTXX4exKaJ9diNIOKwzjTcGi8W8Vk20a9NxcWu6ZHWNOwreuOU66diVhsK17h1MepRk7uli3v+GC10WnI25dFoNl4DEM4ve1OKSYAGTeSg4LAe7rgNNo/laybCUWK6pSIPRLoz5Ka/KCmvdXlRRcWiNKDUhyCj2s74+wAeagFwhPY+pL3nr9lFaTCoAKae3WUpr0l5QJaiAulsGqVHSEBcSCVwDkUEGwCUiQQFCJGEaASggFnN596GYZpYyH1SLN0b1d+FBW7+bWpgsoSC8O4iZ+S1mnqbeiqNjhqfr4XWJ2hinPe57nfE4kk9ea0TaxZDJkgDti2Z59irK5LreEpiriyAS0E5/ZRsPXJzOf8AH+VJIk58j0PJBTV9sViRwsiTrppzT+GfinuHATr+6BM5yp9fC8QHQx/iyZp0KzT8ItkDqPogusDisbAa8HjBzkSRpJ1V5hsVj2gEta9vIkcUdDKyg2hiQWyDrcche/NajAbQqkAvachyRpPG3HcbWPpvboTeAe3VXVCrxAc1F94Hi/anaZiwyQSnKPiavC1zjoE46oqLauK4jwA2GfU8kFa9+vNNOyzQcUiUAYblE439fhJLoQDpQOZJbM0ghGxyB7hRIcR5oINcESAVZtTeDDYcHjqiR+1vxOnlAyQWZRm3dM9O1c52t7SYtQpC4+apJ7PgEfUrI7S3mxOIHDVqFwn5RDW/9RZB1HePeanSpuDHtc8iBBnhOS5Ni3l7i8ukm5lRX1CTnIRB/NAy9h4ua1G2qP8ATpV2D5mNnlOd+26zTXSui7JwLauBYw3tHXoft4IMjhscHXMzMchl2K5wtUEdZWa2rs59F/Cflmzo0vn65p7CbR4SOLIehZGWxwxBF9J1zz+quMG0WA7T5Ssfh9og5Ot00M63V3s7HdeU8/V0GtwWHZNwJ+3RWn6RmYCzGG2m2bmLhXdDHjhzRpKFENQe8DWfLmmXYkGwu46JdGjq655aBApgnOwWex9PgrOpzdtx/abhaKoJgcyAstvnVjFENMFrGA9cyPugRUUfiv6+yZwmK4xB+YfXqE68IyJ6NgREoNRo+DbRGyE1xwi951QO8Xr0EE17zoggxW099MTWkF5a0/tbYdiz5qlxJNyddUXBojECyAoJ1SmwEhONKAyZRoOCJ2SAm8l0LcHFyDTOUz5fhc/pi8rT7s1zTqNeTbI9ht+D3IN/tnYLKrbtBBzHmLWK5xvDuxVofGAXU5HxAXaZ/cBl2rs1JwNOZ08k1hWNeCCAQZBGYPMIOFMYQ2zov3+rq02fjnsiTOQFj9ea223txM34bnJpnL/gTl2FZI7PIJlpBBiHCCO0IJ9HEveS4ASr7Z4e6AXCOmZ7ys3SlvrsWm2JirZIy0mCoBmXjr3lSnPUOhUtJPrkrTAYEvhzxDdBqep6dEaP7Mw/EeMiw+XzcuSb2Y8O2hiGg/K8Nz5Mau4xA7F523qcP19VzRHE6e/LyQqaXuBEZq2w2N4gA6zvoexV2Bw/E0HNOPw5BKMrebIwVBw2IORyGqkufbNApzwmXu6o3PTLnjmgc94gm/eIIOfOsm4TjxdIZCNF8ISCCluACUCgRCEJQZCebT5IEUWK6w1SAq2myCrOjTHNGXR93to+9otIzaIcDzGverDB1eB5jIrE7sYr3dUNPyvt45FbTEENP25o00FF03BTO1dhU67ZgB8WcB9DzCj7MxQNleUioOYbW2O6ld7S0EkcUfCfBSNlVaZcykDwuePhLgQ09hOak+1DbRbwYdjoJHE8jMDQTmJv9FzKriHSHF7i4RBLiSIOhOSo71gNmNaZd8RGU5eCuGtVXuxjvfYWlUObmji/uFj9VbFRVZt3FFlMxmbd2q4LvmyMUDYS0ZLse81eJGcCFxbfZ5/UsMyeAdyrNWuxsQQIVy94Oaymy65sCr9lSQiHy1pySWJkPSmPtdA/Y6pD2pAIRNfzQDhQRyEEGEA5pPByTtsyiKNG36IDkEHBBjkDjTon2SAmWiyea2IugcY+CprHwFAa05qS05IylUapkEaLqOxMa3EUhMcbRfmeq5dSpk3hXWxMe6i8O017NUHRGU+FwIEX9aK2q41tNjnvMNaCT3KA2qHta5uThPbKoN7MZxM9yD1fHTIeKNOe7Xx769Z9V2biT3aDuACrKxsbFLcDeExVyjmjLs/szxf9H3f7fmae3MefetniHQJXLPZ7UNJjDJLbZf8A166Lo21K4DLmx1UajNbaqcQNrlcj3vYf1DQcg3v710/aLyT8JXMN8pOJba/Dc87qhnB6BXuHfAVDg3kGNFbUHCEZTnO8UpjpUVpKdYYQOPJCIPlOAA5pLmXsgVIQSpQQYholE5ONFpSHo0bIlFw6IwUfCgW0xonWOlNtalsyhA9TCkUegUcBP0nWQWeGfFihXq2zhRWVkziq86WRlvd0tscdM0+L42fL/afx+E7tnCgMe5vzEG57FzzYu1fcYhj78M8Lo/2usfCx7lv8fiw5ry3INmfMI0589R6gMQBfTopLzewuc/rkmWt4XSUGw9n+0AHGg7J12zz18lutq1CGZmLW5aLjmExZZUa8WIIXTsPtD3rW6yB/KCO9+srnu+bh+obGZbfxK6FiqUG2ULm++Q/1DTkOHzQRsIYNldUTaFS4RytaDjZBLJIS2SbJtzrWSmvhGUqmLJbj9VFbVKda+dUD3Cgk8QQQY2bJt+iU8IojRGjcpbSdUHI2DVAtgSgL8kTUYQOApxhTUxmjFQIHg8BR8RX0QqVQoDnXlAms6Vv928aKuFPF8zAWO5mBY94hc7e+VZ7t40sqlkkNeIPaASPP6IJ5bB0HLrnkmKnqc0+/rp91HcgZfPLVbTdLGAgNKxjlZ7vYngeAg6HjaokgLmu95/rgdB6C3rH8RJWC3z/87ezJBCpOgqwovsqmi5WGGfaEFkx5iUYfdNM9BE4oJAdqFIa5RGPT7UZSJQTc9UEGUPkltQQRo0/VCjkgggdZkURQQQLZkjcLIIIyi4lRiggjRvNClZzTycPuEEEGkq5qPVz9ckEEDTk7g/naggg32zcj2LE78/8AsM/tH3KNBBTUswrBmaCCCexE9BBGR0Lkqa3VBBAaCCCD/9k=" alt="profile picture"/>
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">John D.</cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Teacher in Scholstica</cite>
        </div>
    </figcaption>
</figure>








            <figure className=" bg-blue-900  rounded-lg shadow-lg w-full h-full ">
    <div className="flex items-center justify-center mb-4 text-yellow-300 rounded-3xl">
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
    <blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center md:text-justify ">"Mindspark empowers learners with personalized courses, interactive materials, and progress tracking, making it a standout platform for effective online education."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center pb-2 mt-6 space-x-3">
        <img className="w-6 h-6 rounded-full " src="data:image/jpeg;base64,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" alt="profile picture"/>
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Sarah M.</cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Student in Oxford</cite>
        </div>
    </figcaption>
</figure>








        </section></div>

    );
};

export default TestimonialsSection;