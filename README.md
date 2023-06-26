# playerAnimator-KubeJS
A "library" for registering and activating playerAnimator animations via KubeJS.

# Creating an animation
You can [create an animation](https://github.com/KosmX/emotes/tree/dev/blender) using the Emotecraft format in Blender.
Follow the instructions in the README within the Blender file, and then run the script when you're done animating.
Once the script is done running, a JSON file (named respectively) should show up in the same directory. From there, you can put your JSON file inside of your KubeJS assets (in `kubejs/assets/kubejs/player_animation`).
Place `animator_setup.js` inside your client scripts, and `test.js` inside of your server scripts.

# Activating the animation
Once you have run your game after creating and registering your animation, you can activate the test script by using the function in `test.js`. Valid event handlers for the function require a `level` method and a `player` method.
The function has three parameters:
  - event: The first parameter, which just requires you to put `event` in it, respective to the event handler's callback.
  - animation: The second parameter, which just requires a ResourceLocation for the animation. ResourceLocations for animations are just stated as e.g. `'kubejs:waving'`
  - type: The last parameter, which requires a string stating which arms will show in first-person while the animation is running. Valid parameters are `'leftArm'`, `'rightArm'`, and `'bothArms'`.
