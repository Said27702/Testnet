class HacsData:
    """HacsData class."""

    def __init__(self):
        """Initialize."""
        self.logger = getLogger("data")
        self.hacs = get_hacs()
        self.queue = QueueManager()
        self.content = {}

    async def async_write(self):
        """Write content to the store files."""
        if self.hacs.status.background_task or self.hacs.system.disabled:
            return

        self.logger.debug("Saving data")
