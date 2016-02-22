<?php

// shared context functions

function get_foo($context) {
  if (!empty($context)) {
    // do stuff
    $foo = 'bar';
  }

  return $context;
}