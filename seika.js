$(() => {
    const $pass = $("#pass");
    const $enter = $("#enter");
    $enter.on("click", () => {
        $.ajax({
            url: $pass.val() + ".html"
        }).then(html => {
            $("body").html(html);
        }).catch(() => {
            alert("パスワード認証に失敗しました");
            $pass.val("");
        });
    })
    $pass.on("keydown", e => {
        if(e.keyCode === 13) $enter.trigger("click");
    });
});