
export default defineNuxtRouteMiddleware(async (to) => {
    // ページ遷移時に route.params.code の値を保持する
    // 参考URL: https://stackoverflow.com/questions/76127659/route-params-are-undefined-in-layouts-components-in-nuxt-3
    if (to.params && to.params.code) {
        let routeParamCode = useState('routeParamCode', () => to.params.code);
        routeParamCode.value = to.params.code;
    }
});
