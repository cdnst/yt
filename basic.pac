function FindProxyForURL(url, host) 
{ 
if (dnsDomainIs(host, '.youtube.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.googlevideo.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.youtu.be')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'youtu.be')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.ytimg.com')) { return 'HTTPS auto.v9k.ru:443';}  
if (dnsDomainIs(host, '.chatgpt.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.perplexity.ai')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'gemini.google.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'x.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.x.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'instagram.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.instagram.com')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'rutracker.org')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'rutracker.сс')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'rutrk.org')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '.rutracker.org')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'static.rutracker.сс')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, 'rutrk.org')) { return 'HTTPS auto.v9k.ru:443';} 
if (dnsDomainIs(host, '2ip.ru')) { return 'HTTPS auto.v9k.ru:443';} 
return 'DIRECT'; 

}
