<?php

//Почта администратора, кому будут приходить письма
define("_ADMIN_EMAIL_", "agri@berdzavod.com");

/*
 * Настройки почты по умолчанию
 */
define('_MAIL_TYPE_', 'SMTP');
define('_SMTP_HOST_', 'mail.adm.tools');
define('_SMTP_LOGIN_', 'sales@berdzavod.com.ua'); // email с которого будут отправлятся письма
define('_SMTP_PASSWORD_', '@ukrnet58!#46RTjeep'); // пароль от почты с которой будут отправлятся письма
define('_SMTP_SECURE_', 'ssl'); // tls
define('_SMTP_PORT_', 465);

/*
 * Настрйоки ReCaptha
 */
define('_RECAPTCHA_', false); // Если включить CAPTCHA то true, если отключить то false
define('_PRIVATE_KEY_', ''); //секретный ключ
define('_RESPONCE_NAME_', 'g-recaptcha-response');