function animatePlayer(event, animation, type) {
    event.level.getEntities('@a').forEach(player => {
        let entity = event.player.id
        player.sendData('animation', { animation: animation, player: entity.toString(), type: type })
    })
}

onEvent('player.chat', event => {
  if (event.message == 'wave') {
    animatePlayer(event, 'kubejs:waving', 'rightArm')
  }
})
