$(function(){
    seletorPais();
})

function seletorPais(){
    $("#pais").change(function(){
        if(this.value == "---"){
            $("#estado").empty();
            $("#estado").append('<option value="nenhum">---</option>');
        } else if(this.value == "Brasil"){
            $("#estado").empty();
            $("#estado").append('<option value="nenhum">---</option>');
            $("#estado").append('<option value="ac">Acre</option>');
            $("#estado").append('<option value="al">Alagoas</option>');
            $("#estado").append('<option value="ap">Amapá</option>');
            $("#estado").append('<option value="am">Amazonas</option>');
            $("#estado").append('<option value="ba">Bahia</option>');
            $("#estado").append('<option value="ce">Ceará</option>');
            $("#estado").append('<option value="df">Distrito Federal</option>');
            $("#estado").append('<option value="es">Espírito Santo</option>');
            $("#estado").append('<option value="go">Goiás</option>');
            $("#estado").append('<option value="ma">Maranhão</option>');
            $("#estado").append('<option value="mt">Mato Grosso</option>');
            $("#estado").append('<option value="ms">Mato Grosso do Sul</option>');
            $("#estado").append('<option value="mg">Minas Gerais</option>');
            $("#estado").append('<option value="pa">Pará</option>');
            $("#estado").append('<option value="pb">Paraíba</option>');
            $("#estado").append('<option value="pr">Paraná</option>');
            $("#estado").append('<option value="pe">Pernambuco</option>');
            $("#estado").append('<option value="pi">Piauí</option>');
            $("#estado").append('<option value="rj">Rio de Janeiro</option>');
            $("#estado").append('<option value="rn">Rio Grande do Norte</option>');
            $("#estado").append('<option value="rs">Rio Grande do Sul</option>');
            $("#estado").append('<option value="ro">Rondônia</option>');
            $("#estado").append('<option value="rr">Roraima</option>');
            $("#estado").append('<option value="sc">Santa Catarina</option>');
            $("#estado").append('<option value="sp">São Paulo</option>');
            $("#estado").append('<option value="se">Sergipe</option>');
            $("#estado").append('<option value="to">Tocantins</option>');
        } else if(this.value == "Estados Unidos"){
            $("#estado").empty();
            $("#estado").append('<option value="nenhum">---</option>');
            $("#estado").append('<option value="ak">Alasca</option>');
            $("#estado").append('<option value="al">Alabama</option>');
            $("#estado").append('<option value="ar">Arkansas</option>');
            $("#estado").append('<option value="az">Arizona</option>');
            $("#estado").append('<option value="ca">California</option>');
            $("#estado").append('<option value="co">Colorado</option>');
            $("#estado").append('<option value="ct">Connecticut</option>');
            $("#estado").append('<option value="de">Delaware</option>');
            $("#estado").append('<option value="fl">Flórida</option>');
            $("#estado").append('<option value="ga">Geórgia</option>');
            $("#estado").append('<option value="hi">Havaí</option>');
            $("#estado").append('<option value="ia">Iowa</option>');
            $("#estado").append('<option value="id">Idaho</option>');
            $("#estado").append('<option value="il">Illinois</option>');
            $("#estado").append('<option value="in">Indiana</option>');
            $("#estado").append('<option value="ks">Kansas</option>');
            $("#estado").append('<option value="ky">Kentucky</option>');
            $("#estado").append('<option value="la">Louisiana</option>');
            $("#estado").append('<option value="ma">Massachussets</option>');
            $("#estado").append('<option value="md">Maryland</option>');
            $("#estado").append('<option value="me">Maine</option>');
            $("#estado").append('<option value="mi">Michigan</option>');
            $("#estado").append('<option value="mn">Minnesota</option>');
            $("#estado").append('<option value="mo">Missouri</option>');
            $("#estado").append('<option value="ms">Mississippi</option>');
            $("#estado").append('<option value="mt">Montana</option>');
            $("#estado").append('<option value="nc">Carolina do Norte</option>');
            $("#estado").append('<option value="nd">Dakota do Norte</option>');
            $("#estado").append('<option value="ne">Nebraska</option>');
            $("#estado").append('<option value="nh">Nova Hempshire</option>');
            $("#estado").append('<option value="nj">Nova Jérsei</option>');
            $("#estado").append('<option value="nm">Novo México</option>');
            $("#estado").append('<option value="nv">Nevada</option>');
            $("#estado").append('<option value="ny">Nova Iorque</option>');
            $("#estado").append('<option value="oh">Ohio</option>');
            $("#estado").append('<option value="ok">Oklahoma</option>');
            $("#estado").append('<option value="or">Oregon</option>');
            $("#estado").append('<option value="pa">Pensilvânia</option>');
            $("#estado").append('<option value="ri">Rhode Island</option>');
            $("#estado").append('<option value="sc">Carolina do Sul</option>');
            $("#estado").append('<option value="sd">Dakota do Sul</option>');
            $("#estado").append('<option value="tn">Tenessee</option>');
            $("#estado").append('<option value="tx">Texas</option>');
            $("#estado").append('<option value="ut">Utah</option>');
            $("#estado").append('<option value="vt">Vermont</option>');
            $("#estado").append('<option value="va">Virgínia</option>');
            $("#estado").append('<option value="wa">Washington</option>');
            $("#estado").append('<option value="wi">Wisconsin</option>');
            $("#estado").append('<option value="wv">Virgínia Ocidental</option>');
            $("#estado").append('<option value="wy">Wyoming</option>');
        };
    });
}
