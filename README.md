# Player Animations in KubeJS
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

## Manual activation
The given function tells you everything you need to know about activating an animation.

1. You need to get all player entities in the same dimension as the target and iterate through them
2. You need to get the player's UUID (e.g. `event.player.id`)
3. You need to send a packet with the ID `'animation'` to each player, in which the packet has an animation ID, the player's UUID ***AS A STRING***, and the animation type
