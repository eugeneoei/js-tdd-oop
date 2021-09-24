# Overview

TDD OOP Javascript practice exercise on gilded-rose-kata.

For full descriptions of requirements and user stories, refer to [this](https://kata-log.rocks/gilded-rose-kata).

# Assumptions

- Not entirely certain what "Quality drops to 0 after the concert" requirement means. Assumes that `quality` becomes `0` when `sellIn` < 0

- Assumes that `Item` class can be instantiated with `quality` > 50. However, `quality` will be reset to 50 if updated `quality` is > 50

- Assumes that a legendary item can be instantiated with any value but will be set to 80 when it's quality is updated
