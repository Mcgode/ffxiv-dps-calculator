let fs = require('fs');

let format = "Lv.\tMP\tMAIN\tSUB\tDIV\tHP\tELMT\tTHREAT\n" +
    "8";
format = format.split("\n")[0].trim().split("\t");

let rawData = "1\t10000\t20\t56\t56\t86\t52\t2\n" +
    "2\t10000\t21\t57\t57\t101\t54\t2\n" +
    "3\t10000\t22\t60\t60\t109\t56\t3\n" +
    "4\t10000\t24\t62\t62\t116\t58\t3\n" +
    "5\t10000\t26\t65\t65\t123\t60\t3\n" +
    "6\t10000\t27\t68\t68\t131\t62\t3\n" +
    "7\t10000\t29\t70\t70\t138\t64\t4\n" +
    "8\t10000\t31\t73\t73\t145\t66\t4\n" +
    "9\t10000\t33\t76\t76\t153\t68\t4\n" +
    "10\t10000\t35\t78\t78\t160\t70\t5\n" +
    "11\t10000\t36\t82\t82\t174\t73\t5\n" +
    "12\t10000\t38\t85\t85\t188\t75\t5\n" +
    "13\t10000\t41\t89\t89\t202\t78\t6\n" +
    "14\t10000\t44\t93\t93\t216\t81\t6\n" +
    "15\t10000\t46\t96\t96\t230\t84\t7\n" +
    "16\t10000\t49\t100\t100\t244\t86\t7\n" +
    "17\t10000\t52\t104\t104\t258\t89\t8\n" +
    "18\t10000\t54\t109\t109\t272\t93\t9\n" +
    "19\t10000\t57\t113\t113\t286\t95\t9\n" +
    "20\t10000\t60\t116\t116\t300\t98\t10\n" +
    "21\t10000\t63\t122\t122\t333?\t102\t10\n" +
    "22\t10000\t67\t127\t127\t366\t105\t11\n" +
    "23\t10000\t71\t133\t133\t399\t109\t12\n" +
    "24\t10000\t74\t138\t138\t432\t113\t13\n" +
    "25\t10000\t78\t144\t144\t465\t117\t14\n" +
    "26\t10000\t81\t150\t150\t498?\t121\t15\n" +
    "27\t10000\t85\t155\t155\t531\t125\t16\n" +
    "28\t10000\t89\t162\t162\t564\t129\t17\n" +
    "29\t10000\t92\t168\t168\t597?\t133\t18\n" +
    "30\t10000\t97\t173\t173\t630\t137\t19\n" +
    "31\t10000\t101\t181\t181\t669\t143\t20\n" +
    "32\t10000\t106\t188\t188\t708\t148\t22\n" +
    "33\t10000\t110\t194\t194\t747\t153\t23\n" +
    "34\t10000\t115\t202\t202\t786\t159\t25\n" +
    "35\t10000\t119\t209\t209\t825\t165\t27\n" +
    "36\t10000\t124\t215\t215\t864\t170\t29\n" +
    "37\t10000\t128\t223\t223\t903\t176\t31\n" +
    "38\t10000\t134\t229\t229\t942\t181\t33\n" +
    "39\t10000\t139\t236\t236\t981\t186\t35\n" +
    "40\t10000\t144\t244\t244\t1020\t192\t38\n" +
    "41\t10000\t150\t253\t253\t1088\t200\t40\n" +
    "42\t10000\t155\t263\t263\t1156\t207\t43\n" +
    "43\t10000\t161\t272\t272\t1224\t215\t46\n" +
    "44\t10000\t166\t283\t283\t1292\t223\t49\n" +
    "45\t10000\t171\t292\t292\t1360?\t231\t52\n" +
    "46\t10000\t177\t302\t302\t1428?\t238\t55\n" +
    "47\t10000\t183\t311\t311\t1496\t246\t58\n" +
    "48\t10000\t189\t322\t322\t1564?\t254\t62\n" +
    "49\t10000\t196\t331\t331\t1632\t261\t66\n" +
    "50\t10000\t202\t341\t341\t1700\t269\t70\n" +
    "51\t10000\t204\t342\t393\t1774\t270\t84\n" +
    "52\t10000\t205\t344\t444\t1851\t271\t99\n" +
    "53\t10000\t207\t345\t496\t1931?\t273\t113\n" +
    "54\t10000\t209\t346\t548\t2015\t274\t128\n" +
    "55\t10000\t210\t347\t600\t2102\t275\t142\n" +
    "56\t10000\t212\t349\t651\t2194\t276\t157\n" +
    "57\t10000\t214\t350\t703\t2289\t278\t171\n" +
    "58\t10000\t215\t351\t755\t2388\t279\t186\n" +
    "59\t10000\t217\t352\t806\t2492\t280\t200\n" +
    "60\t10000\t218\t354\t858\t2600\t282\t215\n" +
    "61\t10000\t224\t355\t941\t2700\t283\t232\n" +
    "62\t10000\t228\t356\t1032\t2800\t284\t250\n" +
    "63\t10000\t236\t357\t1133\t2900\t286\t269\n" +
    "64\t10000\t244\t358\t1243\t3000\t287\t290\n" +
    "65\t10000\t252\t359\t1364\t3100\t288\t313\n" +
    "66\t10000\t260\t360\t1497\t3200\t290\t337\n" +
    "67\t10000\t268\t361\t1643\t3300\t292\t363\n" +
    "68\t10000\t276\t362\t1802\t3400\t293\t392\n" +
    "69\t10000\t284\t363\t1978\t3500\t294\t422\n" +
    "70\t10000\t292\t364\t2170\t3600\t295\t455\n" +
    "71\t10000\t296\t365\t2263\t??\t??\t466\n" +
    "72\t10000\t300\t366\t2360\t??\t??\t??\n" +
    "73\t10000\t305\t367\t2461\t??\t??\t??\n" +
    "74\t10000\t310\t368\t2566\t??\t??\t??\n" +
    "75\t10000\t315\t370\t2676\t??\t??\t??\n" +
    "76\t10000\t320\t372\t2790\t??\t??\t??\n" +
    "77\t10000\t325\t374\t2910\t??\t??\t??\n" +
    "78\t10000\t330\t376\t3034\t??\t??\t??\n" +
    "79\t10000\t355\t378\t3164\t??\t??\t??\n" +
    "80\t10000\t340\t380\t3300\t??\t??\t569";
let data = [];

for (let chunk of rawData.split("\n"))
{
    let splits = chunk.split("\t");
    if (splits.length === format.length) {
        let obj = {};
        for (let i = 0; i < format.length; i++) {
            obj[format[i]] = isNaN(splits[i]) ? splits[i] : parseInt(splits[i])
        }
        data.push(obj)
    }
}

fs.writeFileSync("result.json", JSON.stringify(data));


