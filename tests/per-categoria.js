/* KODAROS per-category calculator verification */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { JSDOM, VirtualConsole } = require('jsdom');
const base = path.resolve(__dirname, '..');
const scriptCode = fs.readFileSync(path.join(base, 'script.js'), 'utf-8');
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf-8');
const vc = new VirtualConsole();
const runtimeErrors = [];
vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) runtimeErrors.push(String(e.message)); });
const dom = new JSDOM(html, { runScripts: 'outside-only', url: pathToFileURL(path.join(base, 'index.html')).href, pretendToBeVisual: true, virtualConsole: vc });
const { window } = dom;
const { document } = window;
window.alert = (m) => { throw new Error('alert: ' + m); };
window.eval(scriptCode);
function set(id, v) { const el = document.getElementById(id); if (el) el.value = v; }
setTimeout(() => {
  const F = [];
  function check(nome, exp, got) {
    const ok = String(got) === String(exp);
    console.log((ok ? 'ok  ' : 'FALHA  ') + nome + ' · esperado=' + exp + ' obtido=' + got);
    if (!ok) F.push(nome);
  }
  // AQUISICAO calcCAC c1_gasto 10000 c1_cli 100 c1_ticket 200 c1_freq 12 c1_ret 12 c1_marg 50 => cac=100 ltv=2400 ratio 24.0:1
  set('c1_gasto', '10000'); set('c1_cli', '100'); set('c1_ticket', '200'); set('c1_freq', '12'); set('c1_ret', '12'); set('c1_marg', '50');
  window.calcCAC();
  check('aquisicao CAC ratio', '24:1', document.getElementById('c1_ratio').textContent);
  // FINANCEIRO calcPrecificacao pr_custo 100 pr_fixo 50 pr_marg 30 pr_imp 10 => preco 250
  set('pr_custo', '100'); set('pr_fixo', '50'); set('pr_marg', '30'); set('pr_imp', '10');
  window.calcPrecificacao();
  check('financeiro Preco', 'R$ 250,00', document.getElementById('pr_preco').textContent);
  // VENDAS calcMetas mt_meta 10000 mt_ticket 200 mt_conv 25 mt_dias 20 => unid 50 vis/dia 10
  set('mt_meta', '10000'); set('mt_ticket', '200'); set('mt_conv', '25'); set('mt_dias', '20');
  window.calcMetas();
  check('vendas unidades', '50', document.getElementById('mt_unid').textContent);
  // SUPORTE calcNPS n_prom 80 n_pass 15 n_det 5 => 75
  set('n_prom', '80'); set('n_pass', '15'); set('n_det', '5'); set('n_total', '100'); set('n_rec', '10');
  window.calcNPS();
  check('suporte NPS', '75', document.getElementById('n_nps').textContent);
  // GESTAO calcOKR ok1 80/100 ok2 50/100 ok3 60/100 media 63%
  set('ok1_c', '80'); set('ok1_t', '100'); set('ok2_c', '50'); set('ok2_t', '100'); set('ok3_c', '60'); set('ok3_t', '100');
  window.calcOKR();
  check('gestao OKR media', '63,3%', document.getElementById('ok_media').textContent);
  // CONTEUDO calcCalendario ce_sem 5 ce_semanas 4 => total 20
  set('ce_sem', '5'); set('ce_semanas', '4');
  window.calcCalendario();
  check('conteudo total posts', '20', document.getElementById('ce_total').textContent);
  // LANCAMENTO calcReceita sr_leads 1000 sr_conv 10 sr_preco 100 => real 10000
  set('sr_leads', '1000'); set('sr_conv', '10'); set('sr_preco', '100');
  window.calcReceita();
  check('lancamento receita real', 'R$ 10.000,00', document.getElementById('sr_real').textContent);
  // navegador nao precisou do servidor; console limpo
  check('sem erros runtime', '', runtimeErrors.join('|'));
  console.log('\nFalhas: ' + F.length);
  process.exit(F.length ? 1 : 0);
}, 300);
